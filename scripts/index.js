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
const popupOpenImage = document.querySelector('.popup_open-image');
const popupImage = popupOpenImage.querySelector('.popup__image');
const popupImageText = popupOpenImage.querySelector('.popup__subtitle');
const popupButtonCloseImage = document.querySelector('.popup__image-button-close');
const popupSubmitElement = document.querySelector('.popup__form');
const popupButtonCloseCard = popupCard.querySelector('.popup__button-close');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-profession');
const userName = formProfile.querySelector('.profile__name');
const userProfession = formProfile.querySelector('.profile__profession');
const nameCard = popupCard.querySelector('.popup__input-name');
const linkCard = popupCard.querySelector('.popup__input-profession');
const popupCardButonSubmit = popupCard.querySelector('.popup__button');

import Popup from './Popup.js';
const popup = new Popup('.popup_info');

//фунция открыть попап Info
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//закрыть попап Info
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}





//открыть попап инфо
const openPopupInfo = function (event) {
  nameInput.value = userName.textContent;
  jobInput.value = userProfession.textContent;
  popup.open();
}


function closePopupInfo() {
  popup.close();
}


//обработчик событий 
buttonOpenEditProfilePopup.addEventListener('click', openPopupInfo);
buttonCloseEditProfilePopup.addEventListener('click', closePopupInfo);
// popupProfileInfo.addEventListener('click', handleClosePopupOnClickOverlay);

//сохранить пользовательский ввод
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userProfession.textContent = jobInput.value;
  closePopup(popupProfileInfo);
}

//обработчик событий для сохранения пользовательского ввода 
popupSubmitElement.addEventListener('submit', handleProfileFormSubmit);

//обработчик событий добавление карточки 
buttonOpenNewCardPopup.addEventListener('click', function () {
  cardFormValidator.disableButton(popupCardButonSubmit);
  openPopup(popupCard);
});

// close popup
function closePopupCard() {
  popupWithForm.close();
}



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


popupCardForm.addEventListener('submit', handleAddCard);



// validity
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();




import PopupWithImage from './PopupWithImage.js';
const popupWithImage = new PopupWithImage('.popup_open-image');
//открытие попапа с картинки w
export function openPopupImage(name, link) {
  // popupImage.src = evt.target.src;
  // const nameCard = evt.target.closest('.element').querySelector('.element__name').textContent;
  // popupImage.alt = nameCard;
  // popupImageText.textContent = nameCard;
  popupWithImage.open(name, link);
}



import PopupWithForm from './PopupWithForm.js';
const popupWithForm = new PopupWithForm('.popup_card');




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