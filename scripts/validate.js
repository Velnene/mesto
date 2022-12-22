function checkInputValidity(inputElement, config) {
  const isValid = inputElement.validity.valid;
  const popupContainer = inputElement.closest(config.form);
  const erorrElement = popupContainer.querySelector(config.popupInputErorr);
  if (isValid) {
    hideInputErorr(inputElement, erorrElement, config);
  }
  else {
    showInputErorr(inputElement, erorrElement, inputElement.validationMessage, config);
  }
}

function enableButton(buttonElement, config) {
  buttonElement.removeAttribute('disable');
  buttonElement.classList.remove(config.buttonInactive);
};
function disableButton(buttonElement, config) {
  buttonElement.setAttribute('disable', true);
  buttonElement.classList.add(config.buttonInactive);
};

function toggleButtonState(inputList, buttonElement, config) {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    disableButton(buttonElement, config);
  }
  else {
    enableButton(buttonElement, config);
  }
}
const setEventListeners = (formElement, config) => {
  formElement.addEventListener('submit', (evt) => {
  })
  const inputList = Array.from(formElement.querySelectorAll(config.popupSelector));
  const submitButton = formElement.querySelector(config.popupButton);
  toggleButtonState(inputList, submitButton, config);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, config);
      toggleButtonState(inputList, submitButton, config);
    });
  });
}

function showInputErorr(inputElement, erorrElement, erorrMessage, config) {
  erorrElement.textContent = erorrMessage;
  erorrElement.classList.add(config.popupMessageErorr);
  inputElement.classList.add(config.popupInputInactive);
};

function hideInputErorr(inputElement, erorrElement, config) {
  erorrElement.textContent = '';
  erorrElement.classList.remove(config.popupMessageErorr);
  inputElement.classList.remove(config.popupInputInactive);
};



const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.popupForm);
  formList.forEach(formElement => {
    setEventListeners(formElement, config);
  })
}

const config = {
  form: '.form',
  popupForm: '.popup__form',
  popupSelector: '.popup__input',
  popupButton: '.popup__button',
  buttonInactive: 'popup__button_inactive',
  popupMessageErorr: '.popup__input-erorr_active',
  popupInputErorr: '.popup__input-erorr',
  popupInputInactive: 'popup__input-inactive'
}


class FormValidator {

  constructor() {
    
   }


 }