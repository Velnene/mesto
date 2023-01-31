import { Card } from '../scripts/components/Card';
import { FormValidator, config } from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import './index.css';
import { Api } from '../scripts/components/Api';
import { PopupWithDeleteCard } from '../scripts/components/PopupWithDeleteCard';
import { PopupChangeAvatar } from '../scripts/components/PopupChangeAvatar';

//переменные
const avatar = document.querySelector('.profile__avatar');
const popupProfileInfo = document.querySelector('.popup_info');
const popupProfileForm = popupProfileInfo.querySelector('.popup__form');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.profile');
const cardsContainer = document.querySelector('.elements');
const popupCard = document.querySelector('.popup_card');
const popupCardForm = popupCard.querySelector('.popup__form');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const nameInput = popupProfileForm.querySelector('.popup__input-name');
const jobInput = popupProfileForm.querySelector('.popup__input-profession');
const userName = formProfile.querySelector('.profile__name');
const userProfession = formProfile.querySelector('.profile__profession');
const userAvatar = formProfile.querySelector('.profile__avatar')
const popupCardButonSubmit = popupCard.querySelector('.popup__button');
const popupAvatar = document.querySelector('.popup_change-avatar');
const avatarForm = popupAvatar.querySelector('.popup__form');
const buttonSubmitAvatar = popupAvatar.querySelector('.popup__form');
const avatarInput = document.querySelector('.popup__input-avatar');
const avatarChange = document.querySelector('.profile__avatar-button');
const api = new Api();
const popupWithImage = new PopupWithImage('.popup_open-image');
const userInfo = new UserInfo({ userName: userName, userProfession: userProfession, avatar: userAvatar });
const popupDeleteCard = new PopupWithDeleteCard('.popup_card-delete');
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
const popupChangeAvatar = new PopupChangeAvatar('.popup_change-avatar');
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
avatarForm.addEventListener('submit', (evt) => {
  popupAvatar.querySelector('.popup__button').textContent = 'Сохранить...';
  evt.preventDefault();
  api.changeUserAvatar(avatarInput.value)
    .then((dataUser) => {
    userInfo.setUserInfo({ name: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar });
    popupChangeAvatar.close();
    })
    .finally(() => {
      popupAvatar.querySelector('.popup__button').textContent = 'Сохранить';
    })
})
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
    }, '#element-template', openPopupImage, openPopupDeleteCard).createCard();
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
    .finally(() => {
      popupCard.querySelector('.popup__button').textContent = 'Создать'
    });
});
popupWithCard.setEventListeners();
// profile get User info

api.getUserInfo({ userName: userName, userProfession: userProfession, avatar: avatar });
// cards initial cards 
api.initialCards().then((res) => {
  res.forEach(element => {
    section.addItem(element);
  });
})

