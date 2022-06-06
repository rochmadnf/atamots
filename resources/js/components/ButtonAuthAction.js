const ButtonAuthAction = (props) => {
  return `
  <div class="login-account">
    <span class="msg" id="auth-message">${props.messages}</span>
    <span data-auth="${props.auth}" class="text-secondary auth-btn-switch" style="cursor: pointer; text-decoration: underline;">${props.label}</span>
  </div>
  `
}

export default ButtonAuthAction;