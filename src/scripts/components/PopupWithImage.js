import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open(name, link) {
    const popupImage = this._selectorPopup.querySelector('.popup__image');
    const popupImageText = this._selectorPopup.querySelector('.popup__subtitle');
    popupImageText.textContent = name;
    popupImage.alt = name;
    popupImage.src = link;
    super.open();
  }
}