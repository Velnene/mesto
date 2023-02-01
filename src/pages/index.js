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
  avatar, popupProfileInfo, popupProfileForm, buttonOpenEditProfilePopup,
  cardsContainer, popupCard, popupCardForm, buttonOpenNewCardPopup,
  nameInput, jobInput, userName, userProfession, userAvatar, popupCardButonSubmit,
  popupAvatar, avatarForm, buttonSubmitAvatar, avatarInput, avatarChange
} from '../scripts/const';
//переменные
const api = new Api();
const popupWithImage = new PopupWithImage('.popup_open-image');
const userInfo = new UserInfo({ userName: userName, userProfession: userProfession, avatar: userAvatar });
const popupDeleteCard = new PopupWithDeleteCard('.popup_card-delete');
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
const popupChangeAvatar = new PopupWithForm('.popup_change-avatar', submitAvatar);
const avatarFormValidation = new FormValidator(config, buttonSubmitAvatar);

export function openPopupDeleteCard(id, card) {
  popupDeleteCard.open();
  popupDeleteCard.setEventListeners(id, card);
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

const popupInfo = new PopupWithForm('.popup_info', ({ name, profession }) => {
  popupProfileInfo.querySelector('.popup__button').textContent = 'Сохранить...';
  api.setUserInfo({ name, profession }).then((dataUser) => {
    userInfo.setUserInfo({ name: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar })
    popupInfo.close();
  })
    .catch(err => alert(err))
    .finally(() => {
      popupProfileInfo.querySelector('.popup__button').textContent = 'Сохранить';
    })
});
popupInfo.setEventListeners();

// попап изменения Аватврки
function openPopupAvatar() {
  avatarFormValidation.disableButton(avatarForm);
  popupChangeAvatar.open()
}
avatarChange.addEventListener('click', openPopupAvatar)
function submitAvatar() {
  popupAvatar.querySelector('.popup__button').textContent = 'Сохранить...';
  api.changeUserAvatar(avatarInput.value)
    .then((dataUser) => {
      userInfo.setUserInfo({ name: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar });
      popupChangeAvatar.close();
    })
    .catch(err => alert(err))
    .finally(() => {
      popupAvatar.querySelector('.popup__button').textContent = 'Сохранить';
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

// создание карточки и иницивлизация карточек
const section = new Section({
  items: [],
  renderer: (cardData) => {
    const newCard = new Card({
      name: cardData.name, link: cardData.link, like: cardData.likes.length, id: cardData._id, card: cardData, myCard: cardData.owner._id,
    }, '#element-template', openPopupImage, openPopupDeleteCard, handleLikeButton, addLike).createCard();
    return newCard;
  },
}, cardsContainer);

// Добавление новой карточки
const popupWithCard = new PopupWithForm('.popup_card', ({ name, link }) => {
  const card = {
    name: name,
    link: link,
  }
  popupCard.querySelector('.popup__button').textContent = 'Создать...'
  api.setNewCard(card).then(res => {
    section.addNewItem(res);
    popupWithCard.close();
  })
    .catch(err => alert(err))
    .finally(() => {
      popupCard.querySelector('.popup__button').textContent = 'Создать'
    });
});
popupWithCard.setEventListeners();
// profile get User info
api.getUserInfo({ userName: userName, userProfession: userProfession, avatar: avatar });
// cards initial cards 
const promisCards =
  api.initialCards().then((res) => {
    res.forEach(element => {
      section.addItem(element);
    })
  })
    .catch(err => alert(err))

function addLike() {
  return this._card.likes.some(likeActive => likeActive._id === '32b5b8bf8c92542a79688185');
}


function handleLikeButton() {
  if (addLike()) {
    api.deleteLike(this._id).then((cardData) => {
      this._newCard.querySelector('.element__like').classList.remove('element__like_active');
      this._updatelikesCounter(cardData.likes);
      this._card = cardData;
    }).catch((err) => {
      console.log(err);
    });
  } else {
    api.addLike(this._id).then((cardData) => {
      this._newCard.querySelector('.element__like').classList.add('element__like_active');
      this._updatelikesCounter(cardData.likes);
      this._card = cardData;
    }).catch((err) => {
      console.log(err);
    });
  }
}


 
