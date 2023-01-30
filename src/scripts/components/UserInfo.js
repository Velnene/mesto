export default class UserInfo {
  constructor({ userName, userProfession, avatar }) {
    this._userName = userName;
    this._userProfession = userProfession;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userProfession.textContent,
    }
  }

  setUserInfo({ name, profession, avatar }) {
    this._userName.textContent = name;
    this._userProfession.textContent = profession;
    console.log(this._avatar)
    this._avatar.src = avatar;
  }

  changeAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}