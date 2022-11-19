//переменные
const popupProfileInfo = document.querySelector('.popup_info');
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
const cardTemplate = document.querySelector('#element-template').content;
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-profession');
const userName = formProfile.querySelector('.profile__name');
const userProfission = formProfile.querySelector('.profile__profession');
const nameCard = popupCard.querySelector('.popup__input-name');
const linkCard = popupCard.querySelector('.popup__input-profession');
const popupCardButonSubmit = popupCard.querySelector('.popup__button');

//фунции открыть попап
function openPopup(popup) {
  document.addEventListener('keydown', handleClosePopupClickEsc);
  popup.classList.add('popup_opened');
}
//открыть попап инфо
const openPopupInfo = function (event) {
  nameInput.value = userName.textContent;
  jobInput.value = userProfission.textContent;
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
function formSubmitProfiledHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userProfission.textContent = jobInput.value;
  closePopup(popupProfileInfo);
}
//обработчик событий для сохранения пользовательского ввода 
popupSubmitElement.addEventListener('submit', formSubmitProfiledHandler);
//Создание карточки через js
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__name').textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  cardElement.querySelector('.element__like').addEventListener('click', handleLikeButton);
  cardElement.querySelector('.element__remove').addEventListener('click', removeCard);
  elementImage.addEventListener('click', openPopupImage);
  return cardElement;
}
function addCard(item) {
  cardsContainer.prepend(createCard(item));
}
//добавление карточек 
initialCards.forEach(function (item) {
  addCard(item);
});
//обработчик событий добавление карточки 
buttonOpenNewCardPopup.addEventListener('click', function () {
  disableButton(popupCardButonSubmit, config);
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
  addCard(card)
  popupCardForm.reset();
  closePopupCard();
}
popupCardForm.addEventListener('submit', handleAddCard);
//лайк карточки
function handleLikeButton(evt) {
  evt.target.classList.toggle('element__like_active');
}
//функция удаления карточки 
function removeCard(evt) {
  evt.target.closest('.element').remove();
}
// закрытие картинки
function popupCloseImage() {
  closePopup(popupOpenImage);
}
//открытие попапа с картинки 
popupButtonCloseImage.addEventListener('click', popupCloseImage);
function openPopupImage(evt) {
  popupImage.src = evt.target.src;
  const nameCard = evt.target.closest('.element').querySelector('.element__name').textContent;
  popupImage.alt = nameCard;
  popupImageText.textContent = nameCard;
  openPopup(popupOpenImage);
}
// validity
enableValidation(config);

//esc
const handleClosePopupClickEsc = function (event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//закрытие попапа при нажатии вне попапа обработчик событий
popupOpenImage.addEventListener('click', handleClosePopupOnClickOverlay);
