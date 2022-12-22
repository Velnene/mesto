// function checkInputValidity(inputElement, config) {
//   const isValid = inputElement.validity.valid;
//   const popupContainer = inputElement.closest(config.form);
//   const erorrElement = popupContainer.querySelector(config.popupInputErorr);
//   if (isValid) {
//     hideInputErorr(inputElement, erorrElement, config);
//   }
//   else {
//     showInputErorr(inputElement, erorrElement, inputElement.validationMessage, config);
//   }
// }

// function enableButton(buttonElement, config) {
//   buttonElement.removeAttribute('disable');
//   buttonElement.classList.remove(config.buttonInactive);
// };
// function disableButton(buttonElement, config) {
//   buttonElement.setAttribute('disable', true);
//   buttonElement.classList.add(config.buttonInactive);
// };

// function toggleButtonState(inputList, buttonElement, config) {
//   const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
//   if (hasInvalidInput) {
//     _disableButton(buttonElement, config);
//   }
//   else {
//     _enableButton(buttonElement, config);
//   }
// }
// const setEventListeners = (formElement, config) => {
//   formElement.addEventListener('submit', (evt) => {
//   })
//   const inputList = Array.from(formElement.querySelectorAll(config.popupSelector));
//   const submitButton = formElement.querySelector(config.popupButton);
//   toggleButtonState(inputList, submitButton, config);
//   inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(inputElement, config);
//       toggleButtonState(inputList, submitButton, config);
//     });
//   });
// }

// function showInputErorr(inputElement, erorrElement, erorrMessage, config) {
//   erorrElement.textContent = erorrMessage;
//   erorrElement.classList.add(config.popupMessageErorr);
//   inputElement.classList.add(config.popupInputInactive);
// };

// function hideInputErorr(inputElement, erorrElement, config) {
//   erorrElement.textContent = '';
//   erorrElement.classList.remove(config.popupMessageErorr);
//   inputElement.classList.remove(config.popupInputInactive);
// };



// const enableValidation = (config) => {
//   const formList = document.querySelectorAll(config.popupForm);
//   formList.forEach(formElement => {
//     setEventListeners(formElement, config);
//   })
// }

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

  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _checkInputValidity(inputElement) { 
    this._isValid = inputElement.validity.valid;
    const popupContainer = inputElement.closest(this._config.form);
    const erorrElement = popupContainer.querySelector(this._config.popupInputErorr);
    if (this._isValid) {
      this._hideInputErorr(inputElement, erorrElement, this._config);
    }
    else {
      this._showInputErorr(inputElement, erorrElement, inputElement.validationMessage, this._config);
    }
  }

  _showInputErorr(inputElement, erorrElement, erorrMessage) {
    erorrElement.textContent = erorrMessage;
    erorrElement.classList.add(this._config.popupMessageErorr);
    inputElement.classList.add(this._config.popupInputInactive);
  };

  _hideInputErorr(inputElement, erorrElement) { 
    const popupContainer = inputElement.closest(this._config.form);
    erorrElement = popupContainer.querySelector(this._config.popupInputErorr);
    erorrElement.textContent = '';
    erorrElement.classList.remove(this._config.popupMessageErorr);
    inputElement.classList.remove(this._config.popupInputInactive);
  }

_enableButton(buttonElement) {
  buttonElement.removeAttribute('disable');
  buttonElement.classList.remove(this._config.buttonInactive);
};

  _disableButton(buttonElement) {
  buttonElement.setAttribute('disable', true);
  buttonElement.classList.add(this._config.buttonInactive);
};

  _toggleButtonState(inputList, buttonElement) {
    this._inputList = inputList;
  const hasInvalidInput = this._inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    this._disableButton(buttonElement);
  }
  else {
    this._enableButton(buttonElement);
  }
}
  
  _setEventListeners = () => {
    this._formElement.addEventListener('submit', () => {
    })
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.popupSelector));
    this._submitButton = this._formElement.querySelector(this._config.popupButton);
    this._toggleButtonState(this._inputList, this._submitButton, this._config);
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement, this._config);
        this._toggleButtonState(this._inputList, this._submitButton, this._config);
      });
    });
  }

  
  enableValidation = () => {
    this._formList = document.querySelectorAll(this._config.popupForm);
    this._formList.forEach(formElement => {
      this._setEventListeners(formElement, this._config);
    })
  }
 }