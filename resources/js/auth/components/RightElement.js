import { InputForm, ButtonAuthAction, ButtonForm } from "../../components/index";

const RightElement = (page) => {
  function loginForm() {
    return ` 
      <div class="container container-signup container-transparent animated fadeIn">
        <h3 class="text-center">${process.env.MIX_APP_NAME}</h3>
        <form id="auth-form" data-action="signin">
          <div class="login-form">
            ${InputForm({name: 'username', label: 'Nama Pengguna', required: true, autofocus: true, tabIndex: 1})}
            ${InputForm({name: 'password', label: 'Katasandi', type: 'password', required: true, tabIndex: 2})}
            ${ButtonForm({label: 'Masuk', tabIndex: 3})}
          </div>
        </form>
        ${ButtonAuthAction({messages: 'Belum memiliki akun?', auth: 'signup', label: 'Daftar'})}
        </div>
    `
  }

  function registerForm() {
    return `
      <div class="container container-signup container-transparent animated fadeIn">
        <h3 class="text-center">${process.env.MIX_APP_NAME}</h3>
        <form id="auth-form" data-action="signup">
          <div class="login-form">
            ${InputForm({name: 'username', label: 'Nama Pengguna', required: true, autofocus: true, tabIndex: 1})}
            ${InputForm({name: 'password', label: 'Katasandi', type: 'password', required: true, tabIndex: 2})}
            ${ButtonForm({label: 'Daftar', tabIndex: 3})}
          </div>
        </form>
        ${ButtonAuthAction({messages: 'Sudah memiliki akun?', auth: 'signin', label: 'Masuk'})}
      </div>
    `
  }

  return `
  <div class="login-aside w-50 d-flex align-items-center justify-content-center bg-white right-element-auth">
    ${(page === 'signin') ? loginForm() : registerForm()}
  </div>
  ` 
}

export default RightElement;