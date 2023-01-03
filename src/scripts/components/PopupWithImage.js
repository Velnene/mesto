import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageText = this._popup.querySelector('.popup__subtitle');
  }
  open(name, link) {
    this._popupImageText.textContent = name;
    this._popupImage.alt = name;
    this._popupImage.src = link;
    super.open();
  }
}