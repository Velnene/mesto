import { Api } from "./Api";
const api = new Api();
export class Card {
  constructor(data, myCardId, selector, openPopupImage, openPopupDeleteCard, handleLikeButton) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes.length;
    this._id = data._id;
    this._data = data;
    this._selector = selector;
    this._openPopupImage = openPopupImage;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._userCard = data.owner._id;
    this._handleLikeButton = handleLikeButton;
    this._myCardId = myCardId
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _checkLike() {
    return this._data.likes.some(likeActive => likeActive._id === this._myCardId);
  }

  _addLike() {
    this._newCard.querySelector('.element__like').classList.add('element__like_active');
  }
  _removeLike() {
    this._newCard.querySelector('.element__like').classList.remove('element__like_active');
  }

  _toggleCreateLikeButton() {
    if (this._checkLike()) {
      this._addLike();
    }
    else {
      this._removeLike()
    }
  }

  _toggleClickLikeButton() {
    if (this._checkLike()) {
      this._removeLike()
    }
    else {
      this._addLike();
    }
  }

  _updatelikesCounter(data) {
    this._newCard.querySelector('.element__like-count').textContent = data.length;
  }

  like(data) {
    this._toggleClickLikeButton();
    this._updatelikesCounter(data.likes);
  }

  removeCard() {
    this._newCard.remove(this._userCard);
    this._newCard = null;
  }

  _createCoutCard() {
    this._newCard.querySelector('.element__like-count').textContent = this._like;
  }

  _addIconDelete() {
    if (this._userCard === this._myCardId) {
      this._newCard.querySelector('.element__remove').addEventListener('click', () => { this._openPopupDeleteCard(this._newCard, this._id) });
    }
    else {
      this._buttonDeletecard.remove();
    }
  }

  _setEventListeners() {
    this._elementLike = this._newCard.querySelector('.element__like');
    this._elementLike.addEventListener('click', () => this._handleLikeButton(this._data, this._checkLike()));
    this._newCard.querySelector('.element__image').addEventListener('click', () => { this._openPopupImage(this._name, this._link) });
  }

  setCard(cardData) {
    this._data = cardData;
  }
  createCard() {
    this._newCard = this._getTemplate();
    this._toggleCreateLikeButton();
    this._buttonDeletecard = this._newCard.querySelector('.element__remove');
    this._elementImage = this._newCard.querySelector('.element__image');
    this._newCard.querySelector('.element__name').textContent = this._name;
    this._createCoutCard();
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._addIconDelete()
    this._setEventListeners();
    return this._newCard;
  }
}