import Popup from "./Popup";
import { Api } from "./Api";
const api = new Api();
export class PopupWithDeleteCard extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup)
  }

  handleRemoveCard(card, id) {
    api.deleteCard(id)
    card.remove(id);
    card = null;
  }

  setEventListeners(card, id) {
    const popupDelete = document.querySelector('.popup__form_card-delete');
    super.setEventListeners();
    popupDelete.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleRemoveCard(card, id);
      this.close();
    })
  }
}
