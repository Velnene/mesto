
function checkInputValidity(inputElement) {
  const isValid = inputElement.validity.valid;
  const popupContainer = inputElement.closest('.form');
  const erorrElement = popupContainer.querySelector('.popup__input-erorr');
  if (isValid) {
    hideInputErorr(inputElement, erorrElement);
  }
  else {
    showInputErorr(inputElement, erorrElement, inputElement.validationMessage);
  }
}

function toggleButtonState(inputList, buttonElement) {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    buttonElement.setAttribute('disable', true);
    buttonElement.classList.add('popup__button_inactive');
  }
  else {
    buttonElement.removeAttribute('disable');
    buttonElement.classList.remove('popup__button_inactive');
  }
}
const setEventListeners = (formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  })
  const inputList = Array.from(formElement.querySelectorAll(selector.popupSelector));
  const submitButton = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, submitButton);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
}

function showInputErorr(inputElement,erorrElement, erorrMessage) {
  erorrElement.textContent = erorrMessage;
  erorrElement.classList.add('.popup__input-erorr_active');
  inputElement.classList.add('popup__input-inactive');
};

function hideInputErorr(inputElement,erorrElement) {
  erorrElement.textContent = '';
  erorrElement.classList.remove('.popup__input-erorr_active');
  inputElement.classList.remove('popup__input-inactive');
};



const enableValidation = () => {
  const formList = document.querySelectorAll('.popup__container');
  formList.forEach(formElement => {
    setEventListeners(formElement);
  })
}

const selector = {
  popupSelector: '.popup__input',
}


