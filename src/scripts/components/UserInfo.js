export default class UserInfo {
  constructor({ userName, userProfession }) {
    this._userName = userName;
    this._userProfession = userProfession;
    this._nameInput = document.querySelector('.popup__input-name');
    this._jobInput = document.querySelector('.popup__input-profession');
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userProfession.textContent
    }
  }

  setUserInfo() {
    this._userName.textContent = this._nameInput.value;
    this._userProfession.textContent = this._jobInput.value;
  }
}