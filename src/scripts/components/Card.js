import { Api } from "./Api";
const api = new Api();
export class Card {
  constructor({ name, link, like, id, card, myCard }, selector, openPopupImage) {
    this._name = name;
    this._link = link;
    this._like = like;
    this._id = id;
    this._card = card;
    this._selector = selector;
    this._openPopupImage = openPopupImage;
    this._myCard = myCard;
  }

  addLike() {
    return this._card.likes.some(likeActive => likeActive._id === '7e9880c4996415f66991104e');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _toggleLikeButton() {
    if (this.addLike()) {
      this._newCard.querySelector('.element__like').classList.add('element__like_active');
    }
    else {
      this._newCard.querySelector('.element__like').classList.remove('element__like_active');
    }
  }

  _handleLikeButton() {
    if (this.addLike()) {
      api.deleteLike(this._id).then((cardData) => {
        this._newCard.querySelector('.element__like').classList.remove('element__like_active');
        this.updatelikesCounter(cardData.likes);
        this._card = cardData;
      }).catch((err) => {
        console.log(err);
      });
    } else {
      api.addLike(this._id).then((cardData) => {
        this._newCard.querySelector('.element__like').classList.add('element__like_active');
        this.updatelikesCounter(cardData.likes);
        this._card = cardData;
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  updatelikesCounter(data) {
    console.log(data.length)
    this._newCard.querySelector('.element__like-count').textContent = data.length;
  }

  _handleRemoveCard() {
    api.deleteCard(this._id)
    this._newCard.remove(this._id);
    this._newCard = null;
  }

  _createCoutCard() {
    this._newCard.querySelector('.element__like-count').textContent = this._like;
  }

  _addIconDelete() {
    if (this._myCard === "7e9880c4996415f66991104e") {
      this._newCard.querySelector('.element__remove').addEventListener('click', () => { this._handleRemoveCard() });
      console.log('my card')
    }
    else {
      this._buttonDeletecard.remove();
      console.log('no my card')
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


// if (!this._isUserCard) {
//   this._cardDelButton.remove();
//   this._cardDelButton = null;
// } else {
//   this._cardElement.querySelector('.card__del-button').addEventListener('click', (event) => {
//     this._handleRemoveButton(event);
//   });
// }
//   }