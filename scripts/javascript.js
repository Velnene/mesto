const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');

const openPopup = function (event) {
  popupElement.classList.add('popup__open');
  nameInput.value = userName.textContent;
  jobInput.value = userProfission.textContent;
}
const closePopup = function (event) {
  popupElement.classList.remove('popup__open');
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
const popupSubmitElement = document.querySelector('.popup__conteiner');

/*сохранение*/
let formElement = document.querySelector('.profile');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-profession');
let userName = formElement.querySelector('.profile__name');
let userProfission = formElement.querySelector('.profile__profession')
function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userProfission.textContent = jobInput.value;
  closePopup();
  //nameInput.value = userName.textContent;
  // jobInput.value = userProfission.textContent;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupSubmitElement.addEventListener('submit', formSubmitHandler);