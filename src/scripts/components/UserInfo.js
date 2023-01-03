export default class UserInfo {
  constructor({ userName, userProfession }) {
    this._userName = userName;
    this._userProfession = userProfession;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userProfession.textContent
    }
  }

  setUserInfo(name, job) {
    this._userName.textContent =name;
    this._userProfession.textContent = job;
  }
}