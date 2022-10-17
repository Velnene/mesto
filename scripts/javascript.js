const popupElement = document.querySelector('.popup');
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