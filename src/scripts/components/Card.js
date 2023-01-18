import { Api } from "./Api";
const api = new Api();
export class Card {
  constructor({ name, link, like, id, card }, selector, openPopupImage) {
    this._name = name;
    this._link = link;
    this._like = like;
    this._id = id;
    this._card = card;
    this._selector = selector;
    this._openPopupImage = openPopupImage;
    // this._isLike = this.isLike();
  }

  isLike() {
    return this._card.likes.some(likeActive =>  likeActive._id === '7e9880c4996415f66991104e' );
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
    api.togleLike(this._id, this.isLike());
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
    this._elementImage = this._newCard.querySelector('.element__image');
    this._newCard.querySelector('.element__name').textContent = this._name;
    this._newCard.querySelector('.element__like-count').textContent = this._like;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._setEventListeners();
    return this._newCard;
  }
}