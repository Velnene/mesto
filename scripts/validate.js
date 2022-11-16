
function checkInputValidity(inputElement) {
  const isValid = inputElement.validity.valid;
  const popupContainer = inputElement.closest('.form');
  const erorrElement = popupContainer.querySelector('.popup__input-erorr');
  if (isValid) {
    hideInputErorr(inputElement, erorrElement);
  }
  else {
    showInputErorr(inputElement, erorrElement, inputElement.validationMessage);
  }
}

function enableButton(buttonElement) {
  buttonElement.removeAttribute('disable');
  buttonElement.classList.remove(selector.buttonInactive);
};
function disableButton(buttonElement) {
  buttonElement.setAttribute('disable', true);
  buttonElement.classList.add(selector.buttonInactive);
};

function toggleButtonState(inputList, buttonElement) {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    disableButton(buttonElement);
  }
  else {
    enableButton(buttonElement);
  }
}
const setEventListeners = (formElement) => {
  formElement.addEventListener('submit', (evt) => {
  })
  const inputList = Array.from(formElement.querySelectorAll(selector.popupSelector));
  const submitButton = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, submitButton);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
}

function showInputErorr(inputElement,erorrElement, erorrMessage) {
  erorrElement.textContent = erorrMessage;
  erorrElement.classList.add(selector.popupMessageErorr);
  inputElement.classList.add(selector.popupInputInactive);
};

function hideInputErorr(inputElement,erorrElement) {
  erorrElement.textContent = '';
  erorrElement.classList.remove(selector.popupMessageErorr);
  inputElement.classList.remove(selector.popupInputInactive);
};



const enableValidation = (selector) => {
  const formList = document.querySelectorAll(selector.popupForm);
  formList.forEach(formElement => {
    setEventListeners(formElement);
  })
}

const selector = {
  popupForm: '.popup__form',
  popupSelector: '.popup__input',
  buttonInactive: 'popup__button_inactive',
  popupMessageErorr: '.popup__input-erorr_active',
  popupInputInactive: 'popup__input-inactive'
}




