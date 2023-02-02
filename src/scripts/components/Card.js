import { Api } from "./Api";
const api = new Api();
export class Card {
  constructor({ name, link, like, id, card, myCard }, selector, openPopupImage, openPopupDeleteCard, handleLikeButton) {
    this._name = name;
    this._link = link;
    this._like = like;
    this._id = id;
    this._card = card;
    this._selector = selector;
    this._openPopupImage = openPopupImage;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._myCard = myCard;
    this._handleLikeButton = handleLikeButton;
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
  return this._card.likes.some(likeActive => likeActive._id === '32b5b8bf8c92542a79688185');
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
    api.deleteCard(this._myCard)
    this._newCard.remove(this._myCard);
    this._newCard = null;
  }

  _createCoutCard() {
    this._newCard.querySelector('.element__like-count').textContent = this._like;
  }

  _addIconDelete() {
    console.log(this._myCard + '1')
    if (this._myCard === "32b5b8bf8c92542a79688185") {
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
    this._buttonDeletecard = this._newCard.querySelector('.element__remove');
    this._elementImage = this._newCard.querySelector('.element__image');
    this._newCard.querySelector('.element__name').textContent = this._name;
    this._createCoutCard();
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._addIconDelete()
    this._setEventListeners();
    this._toggleLikeButton();
    return this._newCard;
  }
}