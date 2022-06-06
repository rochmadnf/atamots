const InputForm = (props) => {
  props.required = (props.required) ? 'required' : '';
  props.autofocus = (props.autofocus) ? 'autofocus' : '';

  return `
  <div class="form-group">
    <label for="${props.name}" class="placeholder">${props.label}</label>
    <input id="${props.name}" name="${props.name}" type="${props.type ?? 'text'}" class="form-control" ${props.required} tabindex="${props.tabIndex ?? ''}">
  </div>
  `
}

export default InputForm;