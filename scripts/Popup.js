export default class Popup {
  constructor(selectorPopup) {
    this._selector = document.querySelector(selectorPopup);
    this._buttonClose = this._selector.querySelector('.popup__button-close');
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._selector.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._selector.classList.remove('popup_opened');
  }

  _handleClosePopupOnClickOverlay(event) {
    if (event.target !== event.currentTarget) {
      return
    }
    this.close();
  }

  setEventListeners() {
    this._buttonClose.addEventListener('click', () => { this.close() });
    this._selector.addEventListener('click', () => { this._handleClosePopupOnClickOverlay() });

  }
}