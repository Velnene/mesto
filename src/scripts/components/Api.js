export class Api {
  constructor() {
    this._cardUrl = 'https://mesto.nomoreparties.co/v1/cohort-59/cards/';
    this._userUrl = 'https://nomoreparties.co/v1/cohort-59/users/me/';
    this._token = '4d30e00f-4868-4e38-a672-84cd476f7f32';
  }

  getUserInfo({ userName, userProfession, avatar }) {
    fetch(this._userUrl, {
      headers: {
        authorization: this._token
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
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: profession
      })
    })
      .then((res) => {
        return res.json();
      })
      .catch(err => {
        alert('Error:' + err);
      });
  }

  changeUserAvatar(avatar) {
    return fetch(this._userUrl + "avatar/", {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then((res) => {
        console.log(res)
        console.log(avatar)
        return res.json();
      })
      .catch(err => {
        alert('Error:' + err);
      });;
  }

  initialCards() {
    return fetch(this._cardUrl, {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return res.json();
      })
      .catch(err => {
        alert('Error:' + err);
      });
  }

  deleteCard(idCard) {
    return fetch(this._cardUrl + idCard, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .catch(err => {
        alert('Error:' + err);
      });
  }

  setNewCard(card) {
    return fetch(this._cardUrl, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then((res) => {
        return res.json();
      })
      .catch(err => {
        alert('Error:' + err);
      });
  }

  addLike(cardId) {
    return fetch(this._cardUrl + cardId + '/likes', {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .catch(err => {
        alert('Error:' + err);
      });
  }

  deleteLike(cardId) {
    return fetch(this._cardUrl + cardId + '/likes', {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .catch(err => {
        alert('Error:' + err);
      });
  }
}

