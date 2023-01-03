export const config = {
  form: '.form',
  popupForm: '.popup__form',
  popupSelector: '.popup__input',
  popupButton: '.popup__button',
  buttonInactive: 'popup__button_inactive',
  popupMessageError: '.popup__input-error_active',
  popupInputError: '.popup__input-error',
  popupInputInactive: 'popup__input-inactive'
}

export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.popupSelector));
    this._submitButton = this._formElement.querySelector(this._config.popupButton);
  }

  _checkInputValidity(inputElement) {
    this._isValid = inputElement.validity.valid;
    const popupContainer = inputElement.closest(this._config.form);
    const errorElement = popupContainer.querySelector(this._config.popupInputError);
    if (this._isValid) {
      this._hideInputError(inputElement, errorElement);
    }
    else {
      this._showInputError(inputElement, errorElement, inputElement.validationMessage);
    }
  }

  _showInputError(inputElement, errorElement, errorMessage) {
    inputElement.classList.add(this._config.popupInputInactive);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.popupMessageError);
  };

  _hideInputError(inputElement, errorElement) {
    const popupContainer = inputElement.closest(this._config.form);
    errorElement = popupContainer.querySelector(this._config.popupInputError);
    errorElement.textContent = '';
    errorElement.classList.remove(this._config.popupMessageError);
    inputElement.classList.remove(this._config.popupInputInactive);
  }
 

  _enableButton() {
    this._submitButton.removeAttribute('disable');
    this._submitButton.classList.remove(this._config.buttonInactive);
  };

  disableButton() {
    this._submitButton.setAttribute('disable', true);
    this._submitButton.classList.add(this._config.buttonInactive);
  };

  _toggleButtonState() {
    const hasInvalidInput = this._inputList.some(inputElement => !inputElement.validity.valid);
    if (hasInvalidInput) {
      this.disableButton();
    }
    else {
      this._enableButton();
    }
  }

  _setEventListeners = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    this._toggleButtonState(this._inputList, this._submitButton);
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._submitButton);
      });
    });
  }

  enableValidation = () => {
    this._setEventListeners();
  }
}