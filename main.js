(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardUrl="https://mesto.nomoreparties.co/v1/cohort-59/cards/",this._userUrl="https://nomoreparties.co/v1/cohort-59/users/me/",this._token="4d30e00f-4868-4e38-a672-84cd476f7f32"}var n,r;return n=t,r=[{key:"getUserInfo",value:function(t){var e=t.userName,n=t.userProfession,r=t.avatar;fetch(this._userUrl,{headers:{authorization:this._token}}).then((function(t){if(t.ok)return t.json();console.log("Ошибка")})).then((function(t){e.textContent=t.name,n.textContent=t.about,r.src=t.avatar}))}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.profession;return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:n})}).then((function(t){return t.json()})).catch((function(t){alert("Error:"+t)}))}},{key:"changeUserAvatar",value:function(t){return fetch(this._userUrl+"avatar/",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return t.json()})).catch((function(t){alert("Error:"+t)}))}},{key:"initialCards",value:function(){return fetch(this._cardUrl,{headers:{authorization:this._token}}).then((function(t){return t.json()})).catch((function(t){alert("Error:"+t)}))}},{key:"deleteCard",value:function(t){return fetch(this._cardUrl+t,{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){alert("Error:"+t)}))}},{key:"setNewCard",value:function(t){return fetch(this._cardUrl,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.json()})).catch((function(t){alert("Error:"+t)}))}},{key:"addLike",value:function(t){return fetch(this._cardUrl+t+"/likes",{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){alert("Error:"+t)}))}},{key:"deleteLike",value:function(t){return fetch(this._cardUrl+t+"/likes",{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){alert("Error:"+t)}))}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=new n,u=function(){function t(e,n,r,o){var i=e.name,u=e.link,a=e.like,c=e.id,l=e.card,s=e.myCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i,this._link=u,this._like=a,this._id=c,this._card=l,this._selector=n,this._openPopupImage=r,this._openPopupDeleteCard=o,this._myCard=s}var e,n;return e=t,(n=[{key:"addLike",value:function(){return this._card.likes.some((function(t){return"32b5b8bf8c92542a79688185"===t._id}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"_toggleLikeButton",value:function(){this.addLike()?this._newCard.querySelector(".element__like").classList.add("element__like_active"):this._newCard.querySelector(".element__like").classList.remove("element__like_active")}},{key:"_handleLikeButton",value:function(){var t=this;this.addLike()?i.deleteLike(this._id).then((function(e){t._newCard.querySelector(".element__like").classList.remove("element__like_active"),t._updatelikesCounter(e.likes),t._card=e})).catch((function(t){console.log(t)})):i.addLike(this._id).then((function(e){t._newCard.querySelector(".element__like").classList.add("element__like_active"),t._updatelikesCounter(e.likes),t._card=e})).catch((function(t){console.log(t)}))}},{key:"_updatelikesCounter",value:function(t){console.log(t.length),this._newCard.querySelector(".element__like-count").textContent=t.length}},{key:"handleRemoveCard",value:function(){i.deleteCard(this._id),this._newCard.remove(this._id),this._newCard=null}},{key:"_createCoutCard",value:function(){this._newCard.querySelector(".element__like-count").textContent=this._like}},{key:"_addIconDelete",value:function(){var t=this;"32b5b8bf8c92542a79688185"===this._myCard?this._newCard.querySelector(".element__remove").addEventListener("click",(function(){t._openPopupDeleteCard(t._newCard,t._id)})):this._buttonDeletecard.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._elementLike=this._newCard.querySelector(".element__like"),this._elementLike.addEventListener("click",(function(){return t._handleLikeButton()})),this._newCard.querySelector(".element__image").addEventListener("click",(function(){t._openPopupImage(t._name,t._link)}))}},{key:"createCard",value:function(){return this._newCard=this._getTemplate(),this._buttonDeletecard=this._newCard.querySelector(".element__remove"),this._elementImage=this._newCard.querySelector(".element__image"),this._newCard.querySelector(".element__name").textContent=this._name,this._createCoutCard(),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._addIconDelete(),this._setEventListeners(),this._toggleLikeButton(),this._newCard}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var f={form:".form",popupForm:".popup__form",popupSelector:".popup__input",popupButton:".popup__button",buttonInactive:"popup__button_inactive",popupMessageError:".popup__input-error_active",popupInputError:".popup__input-error",popupInputInactive:"popup__input-inactive"},p=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_setEventListeners",(function(){r._formElement.addEventListener("submit",(function(t){t.preventDefault()})),r._toggleButtonState(r._inputList,r._submitButton),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState(r._inputList,r._submitButton)}))}))})),l(this,"enableValidation",(function(){r._setEventListeners()})),this._config=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.popupSelector)),this._submitButton=this._formElement.querySelector(this._config.popupButton)}var e,n;return e=t,(n=[{key:"_checkInputValidity",value:function(t){this._isValid=t.validity.valid;var e=t.closest(this._config.form).querySelector(this._config.popupInputError);this._isValid?this._hideInputError(t,e):this._showInputError(t,e,t.validationMessage)}},{key:"_showInputError",value:function(t,e,n){t.classList.add(this._config.popupInputInactive),e.textContent=n,e.classList.add(this._config.popupMessageError)}},{key:"_hideInputError",value:function(t,e){(e=t.closest(this._config.form).querySelector(this._config.popupInputError)).textContent="",e.classList.remove(this._config.popupMessageError),t.classList.remove(this._config.popupInputInactive)}},{key:"_enableButton",value:function(){this._submitButton.removeAttribute("disable"),this._submitButton.classList.remove(this._config.buttonInactive)}},{key:"disableButton",value:function(){this._submitButton.setAttribute("disable",!0),this._submitButton.classList.add(this._config.buttonInactive)}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(t){return!t.validity.valid}))?this.disableButton():this._enableButton()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._popupCloseButton=this._popup.querySelector(".popup__button-close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close()})),this._popupCloseButton.addEventListener("click",(function(){t.close()}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=d(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function d(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupImageText=e._popup.querySelector(".popup__subtitle"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImageText.textContent=t,this._popupImage.alt=t,this._popupImage.src=e,b(w(u.prototype),"open",this).call(this)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var O=function(){function t(e){var n=e.userName,r=e.userProfession,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=n,this._userProfession=r,this._avatar=o}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userProfession.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.profession,r=t.avatar;this._userName.textContent=e,this._userProfession.textContent=n,this._avatar.src=r}},{key:"changeAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}],n&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=e,n._input={},n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList.forEach((function(e){t._input[e.name]=e.value})),this._input}},{key:"setEventListeners",value:function(){var t=this;L(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues())}))}},{key:"close",value:function(){this._form.reset(),L(R(u.prototype),"close",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var D=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._cardsContainer=n}var e,n;return e=t,(n=[{key:"createItems",value:function(){var t=this;this._items.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(t){var e=this._renderer(t);this._cardsContainer.append(e)}},{key:"addNewItem",value:function(t){var e=this._renderer(t);this._cardsContainer.prepend(e)}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=z(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function z(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function F(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var H=new n,G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(o){var n=J(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return F(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"handleRemoveCard",value:function(t,e){H.deleteCard(e),t.remove(e),t=null}},{key:"setEventListeners",value:function(t,e){var n=this,r=document.querySelector(".popup__form_card-delete");V(J(u.prototype),"setEventListeners",this).call(this),r.addEventListener("submit",(function(r){r.preventDefault(),n.handleRemoveCard(t,e),n.close()}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=X(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},W.apply(this,arguments)}function X(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}function Y(t,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Y(t,e)}function Z(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Z(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"close",value:function(){this._form.reset(),W($(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){W($(u.prototype),"setEventListeners",this).call(this)}}])&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h),et=document.querySelector(".profile__avatar"),nt=document.querySelector(".popup_info"),rt=nt.querySelector(".popup__form"),ot=document.querySelector(".profile__edit-button"),it=document.querySelector(".profile"),ut=document.querySelector(".elements"),at=document.querySelector(".popup_card"),ct=at.querySelector(".popup__form"),lt=document.querySelector(".profile__add-button"),st=rt.querySelector(".popup__input-name"),ft=rt.querySelector(".popup__input-profession"),pt=it.querySelector(".profile__name"),yt=it.querySelector(".profile__profession"),vt=it.querySelector(".profile__avatar"),ht=at.querySelector(".popup__button"),mt=document.querySelector(".popup_change-avatar"),_t=mt.querySelector(".popup__form"),bt=mt.querySelector(".popup__form"),dt=document.querySelector(".popup__input-avatar"),gt=document.querySelector(".profile__avatar-button"),St=new n,wt=new k(".popup_open-image"),kt=new O({userName:pt,userProfession:yt,avatar:vt}),jt=new G(".popup_card-delete"),Et=new p(f,ct),Ot=new p(f,rt),Pt=new tt(".popup_change-avatar"),Ct=new p(f,bt);function Lt(t,e){jt.open(),jt.setEventListeners(t,e)}var qt=new B(".popup_info",(function(t){var e=t.name,n=t.profession;nt.querySelector(".popup__button").textContent="Сохранить...",St.setUserInfo({name:e,profession:n}).then((function(t){kt.setUserInfo({name:t.name,profession:t.about,avatar:t.avatar}),qt.close()})).finally((function(){nt.querySelector(".popup__button").textContent="Сохранить"}))}));function It(t,e){wt.open(t,e)}qt.setEventListeners(),gt.addEventListener("click",(function(){Ct.disableButton(_t),Pt.open()})),_t.addEventListener("submit",(function(t){mt.querySelector(".popup__button").textContent="Сохранить...",t.preventDefault(),St.changeUserAvatar(dt.value).then((function(t){kt.setUserInfo({name:t.name,profession:t.about,avatar:t.avatar}),Pt.close()})).finally((function(){mt.querySelector(".popup__button").textContent="Сохранить"}))})),Pt.setEventListeners(),ot.addEventListener("click",(function(){var t=kt.getUserInfo();st.value=t.name,ft.value=t.job,Ot.disableButton(ot),qt.open()})),lt.addEventListener("click",(function(){Et.disableButton(ht),Rt.open()})),Et.enableValidation(),Ot.enableValidation(),Ct.enableValidation(),wt.setEventListeners();var Tt=new D({items:[],renderer:function(t){return new u({name:t.name,link:t.link,like:t.likes.length,id:t._id,card:t,myCard:t.owner._id},"#element-template",It,Lt).createCard()}},ut),Rt=new B(".popup_card",(function(t){var e={name:t.name,link:t.link};at.querySelector(".popup__button").textContent="Создать...",St.setNewCard(e).then((function(t){Tt.addNewItem(t),Rt.close()})).finally((function(){at.querySelector(".popup__button").textContent="Создать"}))}));Rt.setEventListeners(),St.getUserInfo({userName:pt,userProfession:yt,avatar:et}),St.initialCards().then((function(t){t.forEach((function(t){Tt.addItem(t)}))}))})();