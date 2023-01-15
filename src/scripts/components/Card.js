import { Api } from "./Api";
const api = new Api();
export class Card {
  constructor({ name, link }, selector, openPopupImage) {
    this._name = name;
    this._link = link;
    this._selector = selector;
    this._openPopupImage = openPopupImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _handleLikeButton() {
    this._elementLike.classList.toggle('element__like_active');
  }

  _handleRemoveCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _setEventListeners() {
    this._elementLike = this._newCard.querySelector('.element__like');
    this._elementLike.addEventListener('click', () => { this._handleLikeButton() });
    this._newCard.querySelector('.element__remove').addEventListener('click', () => { this._handleRemoveCard() });
    this._newCard.querySelector('.element__image').addEventListener('click', () => { this._openPopupImage(this._name, this._link) });
  }

  createCard() {
    this._newCard = this._getTemplate();
    api.createCountLike(this._newCard);
    this._elementImage = this._newCard.querySelector('.element__image');
    this._newCard.querySelector('.element__name').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._setEventListeners();
    return this._newCard;
  }
}