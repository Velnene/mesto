export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseButton = this._selectorPopup.querySelector('.popup__button-close');
  }

  open() {
    this._selectorPopup.classList.add('popup_opened');
  };

  close() {
    this._selectorPopup.classList.remove('popup_opened');
    this._selectorPopup.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._selectorPopup.addEventListener('mousedown', (event) => {
      if (event.target !== event.currentTarget) {
        return
      }
      this.close();
    });
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
  };
}
