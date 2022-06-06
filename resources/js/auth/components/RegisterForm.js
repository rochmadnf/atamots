import { InputForm, ButtonForm } from "../../components/index";

const RegisterForm = () => {
  return `
  <div class="login-form animated fadeIn">
    ${InputForm({name: 'username', label: 'Nama Pengguna', required: true, tabIndex: 1})}
    ${InputForm({name: 'email', label: 'Surel', type: 'email', required: true, tabIndex: 2})}
    ${InputForm({name: 'password', label: 'Katasandi', type: 'password', required: true, tabIndex: 3})}
    ${InputForm({name: 'confirm_password', label: 'Konfirmasi Katasandi', type: 'password', required: true, tabIndex: 4})}
    ${ButtonForm({label: 'Daftar', tabIndex: 4})}
  </div>
  `
}

export default RegisterForm;