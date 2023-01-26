import Popup from "./Popup";

export class PopupWithDeleteCard extends Popup {
  constructor(selectorPopup,  idCard ) {
    super(selectorPopup)
    this._idCard = idCard;
  }

  deletCard() {

  }
}