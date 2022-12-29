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



//фунция открыть попап
function openPopup(popup) {
  document.addEventListener('keydown', handleClosePopupClickEsc);
  popup.classList.add('popup_opened');
}

//открыть попап инфо
const openPopupInfo = function (event) {
  nameInput.value = userName.textContent;
  jobInput.value = userProfession.textContent;
  openPopup(popupProfileInfo);
}

//закрыть попап 
function closePopup(popup) {
  document.removeEventListener('keydown', handleClosePopupClickEsc);
  popup.classList.remove('popup_opened');
}
function closePopupInfo() {
  closePopup(popupProfileInfo);
}

//закрыть попап при нажании вне попапа
const handleClosePopupOnClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup(event.currentTarget);
}

//обработчик событий 
buttonOpenEditProfilePopup.addEventListener('click', openPopupInfo);
buttonCloseEditProfilePopup.addEventListener('click', closePopupInfo);
popupProfileInfo.addEventListener('click', handleClosePopupOnClickOverlay);

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
  closePopup(popupCard);
}
popupButtonCloseCard.addEventListener('click', closePopupCard);

//закрытие попапа при нажатии вне попапа обработчик событий
popupCard.addEventListener('click', handleClosePopupOnClickOverlay);

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

// закрытие картинки
function popupCloseImage() {
  closePopup(popupOpenImage);
}
//открытие попапа с картинки w
popupButtonCloseImage.addEventListener('click', popupCloseImage);
export function openPopupImage(evt) {
  popupImage.src = evt.target.src;
  const nameCard = evt.target.closest('.element').querySelector('.element__name').textContent;
  popupImage.alt = nameCard;
  popupImageText.textContent = nameCard;
  openPopup(popupOpenImage);
}
// validity
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, popupProfileForm);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

//esc
const handleClosePopupClickEsc = function (event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//закрытие попапа при нажатии вне попапа обработчик событий
popupOpenImage.addEventListener('click', handleClosePopupOnClickOverlay);



import Section from './Section.js';

const section = new Section({
  items: initialCards,
  renderer: (cardData) => { 
    const newCard = new Card(cardData, '#element-template').createCard();
    return newCard;
  }
}, '.elements');

section.CreateItems();

// // создание карточки  
// const createCard = (cardData) => {
//   const newCard = new Card(cardData, '#element-template').createCard();
//   return newCard;
// };
// // функция добавления карточки на страницу
// const addCard = (cardData) => {
//   const card = createCard(cardData);
//   cardsContainer.prepend(card);
// }

// //добавление карточек 
// initialCards.forEach((item) => {
//   addCard(item);
// })