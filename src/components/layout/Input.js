import { InputSty } from "./Input.styled";

const Input = ({ id, label, error, inputHasError, ...rest }) => {
  return (
    <InputSty hasError={inputHasError}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
      {inputHasError && <p className="error">{error}</p>}
    </InputSty>
  );
};

export default Input;
