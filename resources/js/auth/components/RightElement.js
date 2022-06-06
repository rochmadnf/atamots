import { ButtonAuthAction } from "../../components/index";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const RightElement = (page) => {
  return `
  <div class="login-aside w-50 d-flex align-items-center justify-content-center bg-white right-element-auth">
    <div class="container container-login container-transparent animated fadeIn">
      <h3 class="text-center">${process.env.MIX_APP_NAME}</h3>
      <form id="auth-form" data-action="signin">
        ${(page === 'signin') ? LoginForm() : RegisterForm()}
      </form>
      ${ButtonAuthAction({messages: 'Belum memiliki akun?', auth: 'signup', label: 'Daftar'})}
    </div>
  </div>
  ` 
}

export default RightElement;