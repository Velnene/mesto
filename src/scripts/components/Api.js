export class Api {
  constructor() {
    this._cardUrl = 'https://mesto.nomoreparties.co/v1/cohort-57/cards';
    this._userUrl = 'https://nomoreparties.co/v1/cohort-57/users/me';
  }

  getUserInfo({ userName, userProfession, avatar }) {
    // profile
    fetch(this._userUrl, {
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          console.log('Ошибка');
        }
      })
      .then((me) => {
        console.log(me)
        userName.textContent = me.name;
        userProfession.textContent = me.about;
        avatar.src = me.avatar;
      })
  }

  initialCards() {
    return fetch(this._cardUrl, {
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd'
      }
    })
      .then((res) => {
        return res.json();
      })
  }

  setUserInfo({ name, profession }) {
    return fetch(this._userUrl, {
      method: 'PATCH',
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: profession
      })
    })
      .then((res) => {
        return res.json();
      });
  }

  deleteCard() {
    return fetch(this._cardUrl, {
      method: "DELETE",
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/jsonж'
      }
    })
  }

  setNewCard(card) {
    return fetch(this._cardUrl, {
      method: 'POST',
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then((res) => {
        return res.json();
      });
  }

  addLike(card) {
    return fetch(this._cardUrl, {
      method: 'GET',
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((card) => {
        card.querySelector('.element__like-count').textContent = card.likes.length;
      })
  }

  _deleteLike(cardId) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-57/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/jsonж charset=UTF-8'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.likes;
      })
  }

  togleLike(cardId, isLike) {
    if (isLike) {
      return this._deleteLike(cardId);
    }
    else {
      return this._addLike(cardId);
    }
  }

}

