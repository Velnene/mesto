(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardUrl="https://mesto.nomoreparties.co/v1/cohort-59/cards/",this._userUrl="https://nomoreparties.co/v1/cohort-59/users/me/",this._token="4d30e00f-4868-4e38-a672-84cd476f7f32"}var n,r;return n=e,r=[{key:"getUserInfo",value:function(e){var t=e.userName,n=e.userProfession,r=e.avatar;fetch(this._userUrl,{headers:{authorization:this._token}}).then((function(e){if(e.ok)return e.json();console.log("Ошибка")})).then((function(e){t.textContent=e.name,n.textContent=e.about,r.src=e.avatar}))}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.json()}))}},{key:"changeUserAvatar",value:function(e){return fetch(this._userUrl+"avatar/",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(t){return console.log(t),console.log(e),t.json()}))}},{key:"initialCards",value:function(){return fetch(this._cardUrl,{headers:{authorization:this._token}}).then((function(e){return e.json()}))}},{key:"deleteCard",value:function(e){return fetch(this._cardUrl+e,{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},{key:"setNewCard",value:function(e){return fetch(this._cardUrl,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()}))}},{key:"addLike",value:function(e){return fetch(this._cardUrl+e+"/likes",{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},{key:"deleteLike",value:function(e){return fetch(this._cardUrl+e+"/likes",{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},{key:"togleLike",value:function(e,t){return t?this.deleteLike(e):this.addLike(e)}}],r&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=new n,u=function(){function e(t,n,r,o){var i=t.name,u=t.link,a=t.like,c=t.id,l=t.card,s=t.myCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=i,this._link=u,this._like=a,this._id=c,this._card=l,this._selector=n,this._openPopupImage=r,this._openPopupDeleteCard=o,this._myCard=s}var t,n;return t=e,(n=[{key:"addLike",value:function(){return this._card.likes.some((function(e){return"32b5b8bf8c92542a79688185"===e._id}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"_toggleLikeButton",value:function(){this.addLike()?this._newCard.querySelector(".element__like").classList.add("element__like_active"):this._newCard.querySelector(".element__like").classList.remove("element__like_active")}},{key:"_handleLikeButton",value:function(){var e=this;this.addLike()?i.deleteLike(this._id).then((function(t){e._newCard.querySelector(".element__like").classList.remove("element__like_active"),e._updatelikesCounter(t.likes),e._card=t})).catch((function(e){console.log(e)})):i.addLike(this._id).then((function(t){e._newCard.querySelector(".element__like").classList.add("element__like_active"),e._updatelikesCounter(t.likes),e._card=t})).catch((function(e){console.log(e)}))}},{key:"_updatelikesCounter",value:function(e){console.log(e.length),this._newCard.querySelector(".element__like-count").textContent=e.length}},{key:"handleRemoveCard",value:function(){i.deleteCard(this._id),this._newCard.remove(this._id),this._newCard=null}},{key:"_createCoutCard",value:function(){this._newCard.querySelector(".element__like-count").textContent=this._like}},{key:"_addIconDelete",value:function(){var e=this;"32b5b8bf8c92542a79688185"===this._myCard?(this._newCard.querySelector(".element__remove").addEventListener("click",(function(){e._openPopupDeleteCard(e._newCard,e._id)})),console.log("my card")):(this._buttonDeletecard.remove(),console.log("no my card"))}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike=this._newCard.querySelector(".element__like"),this._elementLike.addEventListener("click",(function(){return e._handleLikeButton()})),this._newCard.querySelector(".element__image").addEventListener("click",(function(){e._openPopupImage(e._name,e._link)}))}},{key:"createCard",value:function(){return this._newCard=this._getTemplate(),this._buttonDeletecard=this._newCard.querySelector(".element__remove"),this._elementImage=this._newCard.querySelector(".element__image"),this._newCard.querySelector(".element__name").textContent=this._name,this._createCoutCard(),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._addIconDelete(),this._setEventListeners(),this._toggleLikeButton(),this._newCard}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function l(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var f={form:".form",popupForm:".popup__form",popupSelector:".popup__input",popupButton:".popup__button",buttonInactive:"popup__button_inactive",popupMessageError:".popup__input-error_active",popupInputError:".popup__input-error",popupInputInactive:"popup__input-inactive"},p=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_setEventListeners",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._toggleButtonState(r._inputList,r._submitButton),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState(r._inputList,r._submitButton)}))}))})),l(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.popupSelector)),this._submitButton=this._formElement.querySelector(this._config.popupButton)}var t,n;return t=e,(n=[{key:"_checkInputValidity",value:function(e){this._isValid=e.validity.valid;var t=e.closest(this._config.form).querySelector(this._config.popupInputError);this._isValid?this._hideInputError(e,t):this._showInputError(e,t,e.validationMessage)}},{key:"_showInputError",value:function(e,t,n){e.classList.add(this._config.popupInputInactive),t.textContent=n,t.classList.add(this._config.popupMessageError)}},{key:"_hideInputError",value:function(e,t){(t=e.closest(this._config.form).querySelector(this._config.popupInputError)).textContent="",t.classList.remove(this._config.popupMessageError),e.classList.remove(this._config.popupInputInactive)}},{key:"_enableButton",value:function(){this._submitButton.removeAttribute("disable"),this._submitButton.classList.remove(this._config.buttonInactive)}},{key:"disableButton",value:function(){this._submitButton.setAttribute("disable",!0),this._submitButton.classList.add(this._config.buttonInactive)}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?this.disableButton():this._enableButton()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._popupCloseButton=this._popup.querySelector(".popup__button-close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()})),this._popupCloseButton.addEventListener("click",(function(){e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageText=t._popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImageText.textContent=e,this._popupImage.alt=e,this._popupImage.src=t,b(S(u.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var O=function(){function e(t){var n=t.userName,r=t.userProfession,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userProfession=r,this._avatar=o}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userProfession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession,r=e.avatar;this._userName.textContent=t,this._userProfession.textContent=n,console.log(this._avatar),this._avatar.src=r}},{key:"changeAvatar",value:function(e){var t=e.avatar;this._avatar.src=t}}],n&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function q(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._input={},n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._input[t.name]=t.value})),this._input}},{key:"setEventListeners",value:function(){var e=this;L(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){this._form.reset(),L(R(u.prototype),"close",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var D=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._cardsContainer=n}var t,n;return t=e,(n=[{key:"createItems",value:function(){var e=this;this._items.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._cardsContainer.prepend(t)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function F(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var H=new n,G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"handleRemoveCard",value:function(e,t){H.deleteCard(t),e.remove(t),e=null}},{key:"setEventListeners",value:function(e,t){var n=this;console.log(t);var r=document.querySelector(".popup__form_card-delete");V(J(u.prototype),"setEventListeners",this).call(this),r.addEventListener("submit",(function(r){r.preventDefault(),n.handleRemoveCard(e,t),n.close()})),console.log(e)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=X(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},W.apply(this,arguments)}function X(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}function Y(e,t){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Y(e,t)}function Z(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(o){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Z(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"setEventListeners",value:function(){W($(u.prototype),"setEventListeners",this).call(this)}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h),te=document.querySelector(".profile__avatar"),ne=document.querySelector(".popup_info").querySelector(".popup__form"),re=document.querySelector(".profile__edit-button"),oe=document.querySelector(".profile"),ie=document.querySelector(".elements"),ue=document.querySelector(".popup_card"),ae=ue.querySelector(".popup__form"),ce=document.querySelector(".profile__add-button"),le=ne.querySelector(".popup__input-name"),se=ne.querySelector(".popup__input-profession"),fe=oe.querySelector(".profile__name"),pe=oe.querySelector(".profile__profession"),ye=oe.querySelector(".profile__avatar"),ve=ue.querySelector(".popup__button"),he=new k(".popup_open-image"),me=new O({userName:fe,userProfession:pe,avatar:ye}),de=new p(f,ae),be=new p(f,ne),_e=(document.querySelector(".element__like-count"),new G(".popup_card-delete"));function ge(e,t){_e.open(),_e.setEventListeners(e,t)}var we=new B(".popup_info",(function(e){var t=e.name,n=e.profession;Le.setUserInfo({name:t,profession:n}).then((function(e){me.setUserInfo({name:e.name,profession:e.about,avatar:e.avatar})})),we.close()}));we.setEventListeners();var Se=document.querySelector(".popup__input-avatar"),ke=document.querySelector(".profile__avatar-button"),je=document.querySelector(".popup__form_change-avatar");ke.addEventListener("click",(function(){Ee.open()})),je.addEventListener("submit",(function(e){e.preventDefault(),Le.changeUserAvatar(Se.value).then((function(e){console.log(te.src),me.setUserInfo({name:e.name,profession:e.about,avatar:e.avatar})})),Ee.close()}));var Ee=new ee(".popup_change-avatar");function Oe(e,t){he.open(e,t)}Ee.setEventListeners(),re.addEventListener("click",(function(){var e=me.getUserInfo();le.value=e.name,se.value=e.job,be.disableButton(re),we.open()})),ce.addEventListener("click",(function(){de.disableButton(ve),Ce.open()})),de.enableValidation(),be.enableValidation(),he.setEventListeners();var Pe=new D({items:[],renderer:function(e){return new u({name:e.name,link:e.link,like:e.likes.length,id:e._id,card:e,myCard:e.owner._id},"#element-template",Oe,ge).createCard()}},ie),Ce=new B(".popup_card",(function(e){var t={name:e.name,link:e.link};Le.setNewCard(t).then((function(e){Pe.addItem(e)})),Ce.close()}));Ce.setEventListeners();var Le=new n;Le.getUserInfo({userName:fe,userProfession:pe,avatar:te}),Le.initialCards().then((function(e){e.forEach((function(e){Pe.addItem(e)}))}))})();