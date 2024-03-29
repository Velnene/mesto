import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._submitForm = submitForm;
    this._input = {};
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._popupSubmitButton = this._form.querySelector('.popup__button')
  }

  getInputValues() {
    this._inputList.forEach(element => {
      this._input[element.name] = element.value;
    });
    return this._input;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this.getInputValues());
    });
  }

  changeTextButton(text) {
    this._popupSubmitButton.textContent = text;
  }

  close() {
    this._form.reset();
    super.close();
  }
} 