const LeftElement = () => {
  return `
  <div class="login-aside w-50 d-flex flex-column align-items-center justify-content-center text-center bg-secondary-gradient">
    <h1 class="title fw-bold text-white mb-3">${process.env.MIX_APP_NAME}</h1>
    <p class="subtitle text-white op-7">${process.env.MIX_APP_DESC}</p>
  </div>
  `
}

export default LeftElement; 