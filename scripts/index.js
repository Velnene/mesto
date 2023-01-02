import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo'
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import '../pages/index.css';

//переменные
const popupProfileInfo = document.querySelector('.popup_info');
const popupProfileForm = popupProfileInfo.querySelector('.popup__form');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.profile');
const cardsContainer = document.querySelector('.elements');
const popupCard = document.querySelector('.popup_card');
const popupCardForm = popupCard.querySelector('.popup__form');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-profession');
const userName = formProfile.querySelector('.profile__name');
const userProfession = formProfile.querySelector('.profile__profession');
const nameCard = popupCard.querySelector('.popup__input-name');
const linkCard = popupCard.querySelector('.popup__input-profession');
const popupCardButonSubmit = popupCard.querySelector('.popup__button');





//открыть попап инфо
const openPopupInfo = function () {
  ({
    name: nameInput.value,
    job: jobInput.value
  } = userInfo.getUserInfo());
  popupInfo.open();
}





//обработчик событий 
buttonOpenEditProfilePopup.addEventListener('click', openPopupInfo);


//обработчик событий добавление карточки 
buttonOpenNewCardPopup.addEventListener('click', function () {
  cardFormValidator.disableButton(popupCardButonSubmit);
  popupWithCard.open();
});


// validity
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();





const popupWithImage = new PopupWithImage('.popup_open-image');
//открытие попапа с картинки w
export function openPopupImage(name, link) {
  popupWithImage.open(name, link);
}
popupWithImage.setEventListeners();





const userInfo = new UserInfo({ userName: userName, userProfession: userProfession });


const popupInfo = new PopupWithForm('.popup_info', () => {
  userInfo.setUserInfo();
  console.log('this');
  popupInfo.close();
});
popupInfo.setEventListeners();



// создание карточки и иницивлизация карточек
const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const newCard = new Card({ name: cardData.name, link: cardData.link }, '#element-template', openPopupImage).createCard();
    return newCard;
  }
}, cardsContainer);
section.CreateItems();


// Добавление новой карточки
const popupWithCard = new PopupWithForm('.popup_card', () => {
  const card = {
    name: nameCard.value,
    link: linkCard.value
  }
  section.addItem(card)
  popupWithCard.close();
});
popupWithCard.setEventListeners();