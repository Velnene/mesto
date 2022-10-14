const button = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const openbutton = function () {
  popup.classList.add('popup__open');
}
button.addEventListener('click', openbutton);