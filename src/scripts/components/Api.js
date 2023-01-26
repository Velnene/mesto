export class Api {
  constructor() {
    this._cardUrl = 'https://mesto.nomoreparties.co/v1/cohort-57/cards/';
    this._userUrl = 'https://nomoreparties.co/v1/cohort-57/users/me/';
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
        userName.textContent = me.name;
        userProfession.textContent = me.about;
        avatar.src = me.avatar;
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

  

  deleteCard(idCard) {
    return fetch(this._cardUrl + idCard, {
      method: "DELETE",
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
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

  addLike(cardId) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-57/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
  }

  deleteLike(cardId) {
  return  fetch('https://mesto.nomoreparties.co/v1/cohort-57/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
 
  }

  togleLike(cardId, isLike) {
    if (isLike) {
      return this.deleteLike(cardId);
    }
    else {
      return this.addLike(cardId);
    }
  }

}

