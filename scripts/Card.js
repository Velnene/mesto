import { openPopupImage } from "./index.js";
export class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
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
    this._newCard.querySelector('.element__like').addEventListener('click', () => { this._handleLikeButton() });
    this._newCard.querySelector('.element__remove').addEventListener('click', () => { this._handleRemoveCard() });
    this._newCard.querySelector('.element__image').addEventListener('click', openPopupImage);
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._setEventListeners();
    this._elementImage = this._newCard.querySelector('.element__image');
    this._newCard.querySelector('.element__name').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    return this._newCard;
  }
}