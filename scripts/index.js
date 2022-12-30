import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';
import '../pages/index.css';


//переменные
const popupProfileInfo = document.querySelector('.popup_info');
const popupProfileForm = popupProfileInfo.querySelector('.popup__form');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const buttonCloseEditProfilePopup = popupProfileInfo.querySelector('.popup__button-close');
const formProfile = document.querySelector('.profile');
const cardsContainer = document.querySelector('.elements');
const popupCard = document.querySelector('.popup_card');
const popupCardForm = popupCard.querySelector('.popup__form');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const popupSubmitElement = document.querySelector('.popup__form');
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


// function closePopupInfo() {
//   popupInfo.close();
// }


//обработчик событий 
buttonOpenEditProfilePopup.addEventListener('click', openPopupInfo);
// buttonCloseEditProfilePopup.addEventListener('click', closePopupInfo);
// popupProfileInfo.addEventListener('click', handleClosePopupOnClickOverlay);

// //сохранить пользовательский ввод
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   userName.textContent = nameInput.value;
//   userProfession.textContent = jobInput.value;
//   closePopup(popupProfileInfo);
// }

//обработчик событий для сохранения пользовательского ввода 
// popupSubmitElement.addEventListener('submit', handleProfileFormSubmit);

//обработчик событий добавление карточки 
buttonOpenNewCardPopup.addEventListener('click', function () {
  cardFormValidator.disableButton(popupCardButonSubmit);
  popupWithCard.open();
});

// // close popup
// function closePopupCard() {
//   popupWithForm.close();
// }



//добавление новой карточки 
function handleAddCard(evt) {
  evt.preventDefault();
  const card = {
    name: nameCard.value,
    link: linkCard.value
  }
  section.addItem(card)
  popupCardForm.reset();
  closePopupCard();
}


// popupCardForm.addEventListener('submit', handleAddCard);



// validity
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();




import PopupWithImage from './PopupWithImage.js';
const popupWithImage = new PopupWithImage('.popup_open-image');
//открытие попапа с картинки w
export function openPopupImage(name, link) {
  popupWithImage.open(name, link);
}


import UserInfo from './UserInfo'
const userInfo = new UserInfo({ userName: userName, userProfession: userProfession });
import PopupWithForm from './PopupWithForm.js';
const popupWithCard = new PopupWithForm('.popup_card');
const popupInfo = new PopupWithForm('.popup_info', () => {
  userInfo.setUserInfo();
  console.log('this');
  popupInfo.close();
});
popupInfo.setEventListeners();


// import class Section
import Section from './Section.js';
// создание карточки и иницивлизация карточек
const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const newCard = new Card({ name: cardData.name, link: cardData.link }, '#element-template', openPopupImage).createCard();
    return newCard;
  }
}, cardsContainer);
section.CreateItems();