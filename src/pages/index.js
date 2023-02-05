import { Card } from '../scripts/components/Card';
import { FormValidator, config } from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import './index.css';
import { Api } from '../scripts/components/Api';
import { PopupWithDeleteCard } from '../scripts/components/PopupWithDeleteCard';
import {
  avatar, popupProfileForm, buttonOpenEditProfilePopup,
  cardsContainer, popupCardForm, buttonOpenNewCardPopup,
  nameInput, jobInput, userName, userProfession, userAvatar, popupCardButonSubmit,
  avatarForm, buttonSubmitAvatar, avatarChange
} from '../scripts/const';

//переменные
const api = new Api();
const popupWithImage = new PopupWithImage('.popup_open-image');
const userInfo = new UserInfo({ userName: userName, userProfession: userProfession, avatar: userAvatar });
const popupDeleteCard = new PopupWithDeleteCard('.popup_card-delete', handleRemoveCard);
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
const popupChangeAvatar = new PopupWithForm('.popup_change-avatar', submitAvatar);
const avatarFormValidation = new FormValidator(config, buttonSubmitAvatar);
let myCardId;
let newCard;

export function openPopupDeleteCard(card, id) {
  popupDeleteCard.open(card, id);
}
popupDeleteCard.setEventListeners();

function handleRemoveCard(card, id) {
  api.deleteCard(id)
    .then((() => {
      newCard.removeCard();
      popupDeleteCard.close();
    }))
    .catch(err => alert(err))
}

//открыть попап инфо
const openPopupInfo = function () {
  ({
    name: nameInput.value,
    job: jobInput.value,
  } = userInfo.getUserInfo());
  profileFormValidator.disableButton(buttonOpenEditProfilePopup);
  popupInfo.open();
}

// попап изменения Аватврки
function openPopupAvatar() {
  avatarFormValidation.disableButton(avatarForm);
  popupChangeAvatar.open()
}

avatarChange.addEventListener('click', openPopupAvatar)
function submitAvatar() {
  popupChangeAvatar.changeTextButton('Сохранить...');
  api.changeUserAvatar(popupChangeAvatar.getInputValues())
    .then((dataUser) => {
      userInfo.setUserInfo({ name: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar });
      popupChangeAvatar.close();
    })
    .catch(err => alert(err))
    .finally(() => {
      popupChangeAvatar.changeTextButton('Сохранить');
    })
}

popupChangeAvatar.setEventListeners()
buttonOpenEditProfilePopup.addEventListener('click', openPopupInfo);

//обработчик событий добавление карточки 
buttonOpenNewCardPopup.addEventListener('click', function () {
  cardFormValidator.disableButton(popupCardButonSubmit);
  popupWithCard.open();
});

// validity
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidation.enableValidation();

//открытие попапа с картинки
export function openPopupImage(name, link) {
  popupWithImage.open(name, link);
}
popupWithImage.setEventListeners();
const cards = {}
// создание карточки и иницивлизация карточек
const section = new Section({
  items: [],
  renderer: (data) => {
    newCard = new Card(data, myCardId, '#element-template', openPopupImage, openPopupDeleteCard,
      handleLikeButton);
    cards[data._id] = newCard;
    return newCard.createCard();
  },
}, cardsContainer);

function handleLikeButton(cardId, checkike) {
  if (checkike) {
    api.deleteLike(cardId).then((cardData) => {
      cards[cardId].like(cardData);
      cards[cardId].setCard(cardData)
    }).catch((err) => {
      console.log(err);
    });
  } else {
    api.addLike(cardId).then((cardData) => {
      cards[cardId].like(cardData);
      cards[cardId].setCard(cardData)
    }).catch((err) => {
      console.log(err);
    });
  }
}


// Добавление новой карточки
const popupWithCard = new PopupWithForm('.popup_card', ({ name, link }) => {
  const card = {
    name: name,
    link: link,
  }
  popupWithCard.changeTextButton('Создать...');
  api.setNewCard(card).then(res => {
    section.addNewItem(res);
    popupWithCard.close();
  })
    .catch(err => alert(err))
    .finally(() => {
      popupWithCard.changeTextButton('Создать');
    });
});
popupWithCard.setEventListeners();
// profile get User info

Promise.all([api.initialCards(), api.getUserInfo({ userName: userName, userProfession: userProfession, avatar: avatar })])
  .then((res) => {
    userName.textContent = res[1].name;
    userProfession.textContent = res[1].about;
    avatar.src = res[1].avatar;
    myCardId = res[1]._id;
    res[0].forEach(element => {
      section.addItem(element);
    })
  })
  .catch(err => alert(err))

const popupInfo = new PopupWithForm('.popup_info', ({ name, profession }) => {
  popupInfo.changeTextButton('Сохранить...');
  api.setUserInfo({ name, profession }).then((dataUser) => {
    userInfo.setUserInfo({ name: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar })
    popupInfo.close();
  })
    .catch(err => alert(err))
    .finally(() => {
      popupInfo.changeTextButton('Сохранить');
    })
});


popupInfo.setEventListeners();