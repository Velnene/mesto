import Popup from "./Popup";
import { Api } from "./Api";
const api = new Api();
export class PopupWithDeleteCard extends Popup {
  constructor(selectorPopup, handleRemoveCard) {
    super(selectorPopup)
    this._handleRemoveCard = handleRemoveCard;
  }

  open(card, id) {
    super.open();
    this._card = card;
    this._id = id;
}

  setEventListeners() {
    const popupDelete = document.querySelector('.popup__form_card-delete');
    super.setEventListeners();
    popupDelete.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleRemoveCard(this._card, this._id);
    })
  }
}
