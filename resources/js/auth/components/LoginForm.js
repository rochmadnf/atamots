import { InputForm, ButtonForm } from "../../components/index";

const LoginForm = () => {
  return `
  <div class="login-form animated fadeIn">
    ${InputForm({name: 'username', label: 'Nama Pengguna', required: true, tabIndex: 1})}
    ${InputForm({name: 'password', label: 'Katasandi', type: 'password', required: true, tabIndex: 2})}
    ${ButtonForm({label: 'Masuk', tabIndex: 3})}
  </div>
  `
}

export default LoginForm;