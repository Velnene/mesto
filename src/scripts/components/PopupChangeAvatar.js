import Popup from "./Popup";
export class PopupChangeAvatar extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__form');
  }
  
  close() {
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}