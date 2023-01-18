import { Card } from '../scripts/components/Card';
import { FormValidator, config } from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import './index.css';
import { Api } from '../scripts/components/Api';

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
const popupCardButonSubmit = popupCard.querySelector('.popup__button');
const popupWithImage = new PopupWithImage('.popup_open-image');
const userInfo = new UserInfo({ userName: userName, userProfession: userProfession });
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
const likeCount = document.querySelector('.element__like-count');

//открыть попап инфо
const openPopupInfo = function () {
  ({
    name: nameInput.value,
    job: jobInput.value
  } = userInfo.getUserInfo());
  profileFormValidator.disableButton(buttonOpenEditProfilePopup);
  popupInfo.open();
}

const popupInfo = new PopupWithForm('.popup_info', ({ name, profession }) => {
  userInfo.setUserInfo({ name, profession });
  api.setUserInfo({ name, profession });
  popupInfo.close();
});
popupInfo.setEventListeners();

//обработчик событий 
buttonOpenEditProfilePopup.addEventListener('click', openPopupInfo);
//обработчик событий добавление карточки 
buttonOpenNewCardPopup.addEventListener('click', function () {
  cardFormValidator.disableButton(popupCardButonSubmit);
  popupWithCard.open();
});

// validity
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

//открытие попапа с картинки w
export function openPopupImage(name, link) {
  popupWithImage.open(name, link);
}
popupWithImage.setEventListeners();

// создание карточки и иницивлизация карточек
const section = new Section({
  items: [],
  renderer: (cardData) => {
    const newCard = new Card({ name: cardData.name, link: cardData.link, like: cardData.likes.length, id: cardData._id, card: cardData }, '#element-template', openPopupImage).createCard();
    return newCard;
  }
}, cardsContainer);

// Добавление новой карточки
const popupWithCard = new PopupWithForm('.popup_card', ({ name, link }) => {
  const card = {
    name: name,
    link: link,
  }
  api.setNewCard(card).then(res => {
    section.addItem(res);
  });
  popupWithCard.close();
});
popupWithCard.setEventListeners();
// profile get User info

const api = new Api();
api.getUserInfo({ userName: userName, userProfession: userProfession, avatar: avatar });
// cards initial cards 
api.initialCards().then((res) => {
  res.forEach(element => {
    section.addItem(element);
  });
})
