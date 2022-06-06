window._ = require('lodash');
import LeftElement from "./components/LeftElement";
import RightElement from "./components/RightElement";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const app = document.getElementById('app');

window.addEventListener('load', e => {
  app.insertAdjacentHTML('beforeend', LeftElement());
  app.insertAdjacentHTML('beforeend', RightElement('signin'));

  // autofocus element
  document.getElementById('username').focus();

  // switch form element
  const formElement = document.querySelector('#auth-form');
  const btnSwitch = document.querySelector('.auth-btn-switch');

  function switchElement(props) {
    btnSwitch.setAttribute('data-auth', props.authMode);
    btnSwitch.previousElementSibling.textContent = props.messages;
    btnSwitch.textContent = props.label;
    formElement.insertAdjacentHTML('beforeend', props.component)
  }
  
  btnSwitch.addEventListener('click', e => {
    const target = e.target.getAttribute('data-auth');
    formElement.innerHTML = ``;
    formElement.setAttribute('data-action', target);
    if(target === 'signup'){
      switchElement({
        authMode: 'signin',
        messages: 'Sudah memiliki akun?',
        label: 'Masuk',
        component: RegisterForm(),
      });
    }else {
      switchElement({
        authMode: 'signup',
        messages: 'Belum memiliki akun?',
        label: 'Daftar',
        component: LoginForm(),
      });
    }
  })

});
