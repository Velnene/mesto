function checkInputValidity(inputElement, selectors) {
  const isValid = inputElement.validity.valid;
  const popupContainer = inputElement.closest(selectors.form);
  const erorrElement = popupContainer.querySelector(selectors.popupInputErorr);
  if (isValid) {
    hideInputErorr(inputElement, erorrElement, config);
  }
  else {
    showInputErorr(inputElement, erorrElement, inputElement.validationMessage, config);
  }
}

function enableButton(buttonElement, inactiveButtonClass) {
  buttonElement.removeAttribute('disable');
  buttonElement.classList.remove(inactiveButtonClass.buttonInactive);
};
function disableButton(buttonElement, inactiveButtonClass) {
  buttonElement.setAttribute('disable', true);
  buttonElement.classList.add(inactiveButtonClass.buttonInactive);
};

function toggleButtonState(inputList, buttonElement) {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    disableButton(buttonElement, config);
  }
  else {
    enableButton(buttonElement, config);
  }
}
const setEventListeners = (formElement, selector) => {
  formElement.addEventListener('submit', (evt) => {
  })
  const inputList = Array.from(formElement.querySelectorAll(selector.popupSelector));
  const submitButton = formElement.querySelector(selector.popupButton);
  toggleButtonState(inputList, submitButton, config);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, config);
      toggleButtonState(inputList, submitButton, config);
    });
  });
}

function showInputErorr(inputElement, erorrElement, erorrMessage, selectors) {
  erorrElement.textContent = erorrMessage;
  erorrElement.classList.add(selectors.popupMessageErorr);
  inputElement.classList.add(selectors.popupInputInactive);
};

function hideInputErorr(inputElement, erorrElement, selectors) {
  erorrElement.textContent = '';
  erorrElement.classList.remove(selectors.popupMessageErorr);
  inputElement.classList.remove(selectors.popupInputInactive);
};



const enableValidation = (selector) => {
  const formList = document.querySelectorAll(selector.popupForm);
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
