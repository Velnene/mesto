export class Api {
  constructor() {
    this._cardUrl = 'cards';
    this._userUrl = 'users/me';
  }
  getUserInfo({ userName, userProfession, avatar }) {
    // profile
    fetch('https://nomoreparties.co/v1/cohort-57/users/me', {
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
        console.log(me);
      })
  }

  initialCards() {
   return fetch('https://mesto.nomoreparties.co/v1/cohort-57/cards', {
      headers: {
        authorization: '88f8e5dd-3072-4ebd-b0dd-8f53ee373efd'
      }
    })
      .then((res) => {
        return res.json();
      })
  }
  setUserInfo({ name, profession }) { 
    return fetch('https://nomoreparties.co/v1/cohort-57/users/me', {
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
        return res.json;
      });
  }
}

