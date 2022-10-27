const popupElement = document.querySelector('.popup_info');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');

const openPopup = function (event) {
  popupElement.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userProfission.textContent;
}
const closePopup = function (event) {
  popupElement.classList.remove('popup_opened');
}
const closePopupOnClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup();
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupOnClickOverlay);
const popupSubmitElement = document.querySelector('.popup__container');

/*сохранение*/
const formElement = document.querySelector('.profile');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-profession');
let userName = formElement.querySelector('.profile__name');
let userProfission = formElement.querySelector('.profile__profession')
function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userProfission.textContent = jobInput.value;
  closePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupSubmitElement.addEventListener('submit', formSubmitHandler);



// Массив карточек 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




//Добавление карточки через js
const cardsContainer = document.querySelector('.elements');
function addCard(nameCard, imageCard) {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__name').textContent = nameCard;
  cardElement.querySelector('.element__image').src = imageCard;
  cardElement.querySelector('.element__like').addEventListener('click', likeActive);
  cardsContainer.prepend(cardElement);
}
//Сортировка массива
initialCards.forEach(function (item) {
  addCard(item.name, item.link);
});


//popup add cards
const addCardsPopup = document.querySelector('.popup_card');
const popupCardContainer = addCardsPopup.querySelector('.popup__container');
const addCardsButton = document.querySelector('.profile__add-button');
addCardsButton.addEventListener('click', function () {
  addCardsPopup.classList.add('popup_opened');
});
// close popap
const popupButtonCloseCard = addCardsPopup.querySelector('.popup__button-close');
function closePopapCard() {
  addCardsPopup.classList.remove('popup_opened');
}
popupButtonCloseCard.addEventListener('click', closePopapCard);

const closePopupOCardnClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  addCardsPopup.classList.remove('popup_opened');
}
//закрытие попапа при нажатии вне попапа 
addCardsPopup.addEventListener('click', closePopupOCardnClickOverlay);

//добавление карточки 

nameCard = addCardsPopup.querySelector('.popup__input-name');
linkCard = addCardsPopup.querySelector('.popup__input-profession');

function formSubmitCard(evt) {
  evt.preventDefault();
  const name = nameCard.value;
  const link = linkCard.value;
  addCard(name, link);

  closePopapCard();
}
popupCardContainer.addEventListener('submit', formSubmitCard);




//лайк карточки
function likeActive(evt) {
  evt.target.classList.toggle('element__like_active');
 }