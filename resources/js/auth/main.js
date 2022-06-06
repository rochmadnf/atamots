window._ = require('lodash');
import { ButtonAuthAction } from "../components";
import LeftElement from "./components/LeftElement";
import RightElement from "./components/RightElement";


const app = document.getElementById('app');

window.addEventListener('load', e => {
  app.insertAdjacentHTML('beforeend', LeftElement());
  app.insertAdjacentHTML('beforeend', RightElement('signin'));

  // autofocus element
  document.getElementById('username').focus();

  // switch form element
  const formElement = document.querySelector('.right-element-auth');
  const btnSwitch = document.querySelector('.auth-btn-switch');
  
  btnSwitch.addEventListener('click', e => {
    formElement.innerHTML = ``;
    formElement.insertAdjacentHTML('beforeend', RightElement('signup'));
    const btnSwitch = document.querySelector('.auth-btn-switch');
    console.log(btnSwitch)
  });
});