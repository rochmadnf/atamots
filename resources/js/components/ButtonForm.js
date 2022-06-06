const ButtonForm = (props) => {
  return `
  <div class="form-group mt-3">
    <button type="submit" class="btn btn-secondary btn-block text-white font-weight-bold" tabindex="${props.tabIndex}">${props.label}</button>
  </div>
  `
}

export default ButtonForm;