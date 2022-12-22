// Массив карточек 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


class Card {
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
    this._newCard.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleRemoveCard() { 
    this._newCard.remove();
  }

  _handleOpenPopapImage() { 
    this._elementImage.src = this._link;
    const nameCard = this._newCard.closest('.element').querySelector('.element__name').textContent;
    this._elementImage.alt = nameCard;
    const popupImageText = popupOpenImage.querySelector('.popup__subtitle');
    const popupOpenImage = document.querySelector('.popup_open-image');
    popupImageText.textContent = nameCard;
    openPopup(popupOpenImage);
  }

  _setEventListener() {
    this._newCard.querySelector('.element__like').addEventListener('click', () => { this._handleLikeButton() });
    this._newCard.querySelector('.element__remove').addEventListener('click', () => { this._handleRemoveCard() });
  }

  render() {
    this._newCard = this._getTemplate();
    this._setEventListener();
    this._elementImage = this._newCard.querySelector('.element__image');
    this._newCard.querySelector('.element__name').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementImage.addEventListener('click', openPopupImage);
    return this._newCard;
  }
}
