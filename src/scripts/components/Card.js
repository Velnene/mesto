import { Api } from "./Api";
const api = new Api();
export class Card {
  constructor({ name, link, like, id, card, userCard, myCardId }, selector, openPopupImage, openPopupDeleteCard, handleLikeButton) {
    this._name = name;
    this._link = link;
    this._like = like;
    this._id = id;
    this._card = card;
    this._selector = selector;
    this._openPopupImage = openPopupImage;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._userCard = userCard;
    this._handleLikeButton = handleLikeButton;
    this._myCardId = myCardId
    // this._addLike = addLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _addLike() {
  return this._card.likes.some(likeActive => likeActive._id === this._myCardId);
}

  _toggleLikeButton() {
    if (this._addLike()) {
      this._newCard.querySelector('.element__like').classList.add('element__like_active');
    }
    else {
      this._newCard.querySelector('.element__like').classList.remove('element__like_active');
    }
  }

  _updatelikesCounter(data) {
    this._newCard.querySelector('.element__like-count').textContent = data.length;
  }

  handleRemoveCard() {
    api.deleteCard(this._userCard)
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
    this._elementLike.addEventListener('click', () => this._handleLikeButton());
    this._newCard.querySelector('.element__image').addEventListener('click', () => { this._openPopupImage(this._name, this._link) });
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._toggleLikeButton();
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