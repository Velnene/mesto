//переменные
const popupElement = document.querySelector('.popup_info');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const buttonCloseEditProfilePopup = popupElement.querySelector('.popup__button-close');
const formElement = document.querySelector('.profile');
const cardsContainer = document.querySelector('.elements');
const addCardsPopup = document.querySelector('.popup_card');
const popupCardContainer = addCardsPopup.querySelector('.popup__container');
const addCardsButton = document.querySelector('.profile__add-button');
const popupOpenImage = document.querySelector('.popup_open-image');
const popupImage = popupOpenImage.querySelector('.popup__image');
const popupImageText = popupOpenImage.querySelector('.popup__subtitle');
const popupButtonCloseImage = document.querySelector('.popup__image-button-close');
const popupSubmitElement = document.querySelector('.popup__container');
const popupButtonCloseCard = addCardsPopup.querySelector('.popup__button-close');
const cardTemplate = document.querySelector('#element-template').content;
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-profession');
const userName = formElement.querySelector('.profile__name');
const userProfission = formElement.querySelector('.profile__profession');
const nameCard = addCardsPopup.querySelector('.popup__input-name');
const linkCard = addCardsPopup.querySelector('.popup__input-profession');

//фунции открыть попап
function openPopup(evt) {
  evt.classList.add('popup_opened');
}
//открыть попап инфо
const openPopupInfo = function (event) {
  nameInput.value = userName.textContent;
  jobInput.value = userProfission.textContent;
  openPopup(popupElement);
}
//закрыть попап 
function closePopup(evt){
  evt.classList.remove('popup_opened');
}
function closePopupInfo() {
  closePopup(popupElement);
}
//закрыть попап при нажании вне попапа
const closePopupOnClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup(popupElement);
}
//обработчик событий 
buttonOpenEditProfilePopup.addEventListener('click', openPopupInfo);
buttonCloseEditProfilePopup.addEventListener('click', closePopupInfo);
popupElement.addEventListener('click', closePopupOnClickOverlay);
//сохранить пользовательский ввод
function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userProfission.textContent = jobInput.value;
  closePopup(popupElement);
}
//обработчик событий для сохранения пользовательского ввода 
popupSubmitElement.addEventListener('submit', formSubmitHandler);
//Добавление карточки через js
function addCard(nameCard, imageCard) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__name').textContent = nameCard;
  cardElement.querySelector('.element__image').src = imageCard;
  cardElement.querySelector('.element__like').addEventListener('click', likeActive);
  cardElement.querySelector('.element__remove').addEventListener('click', removeCard);
  cardElement.querySelector('.element__image').addEventListener('click', addPopupImage);
  cardsContainer.prepend(cardElement);
}
//добавление карточек 
initialCards.forEach(function (item) {
  addCard(item.name, item.link);
});
//обработчик событий добавление карточки 
addCardsButton.addEventListener('click', function () {
  openPopup(addCardsPopup);
});
// close popup
function closePopupCard() {
  closePopup(addCardsPopup);
}
popupButtonCloseCard.addEventListener('click', closePopupCard);
// закрытие попапа при нажатии вне попапа 
const closePopupOCardnClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup(addCardsPopup);
}
//закрытие попапа при нажатии вне попапа обработчик событий
addCardsPopup.addEventListener('click', closePopupOCardnClickOverlay);
//добавление карточки 
function formSubmitCard(evt) {
  evt.preventDefault();
  const name = nameCard.value;
  const link = linkCard.value;
  addCard(name, link);
  closePopupCard();
}
popupCardContainer.addEventListener('submit', formSubmitCard);
//лайк карточки
function likeActive(evt) {
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
function addPopupImage(evt) {
  popupImage.src = evt.target.src;
  popupImageText.textContent = evt.target.closest('.element').querySelector('.element__name').textContent;
  openPopup(popupOpenImage);
}