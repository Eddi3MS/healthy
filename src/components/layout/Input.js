import React from "react";
import styled from "styled-components";

const InputSty = styled.div`
  margin-bottom: 0.5rem;
  min-width: 300px;

  label {
    display: block;
    font-weight: bold;
    margin-block: 0.5rem 0.2rem;
    color: ${(props) => (props.hasError ? "#d6362b" : "var(--color-title-2)")};
  }

  input {
    height: 52px;
    min-width: 350px;
    border-radius: var(--radius);  
    border: ${(props) =>
      props.hasError ? "1px solid #d6362b" : "1px solid var(--color-text)"};
    padding-left: 1rem;
    color: var(--color-title);

    &:focus {    
      border: ${(props) =>
        props.hasError ? "1px solid #d6362b" : "2px solid var(--focus-color)"};
      outline: none;
    }

    ::placeholder {
      font-size: 1rem;
      color: ${(props) => (props.hasError ? "#d6362b" : " var(--color-text)")};
    }

    &[type="date"] {
      background-color: white;
    }

    ::-webkit-datetime-edit-text {
      padding: 0 0.2em;
    }

    ::-webkit-inner-spin-button {
      display: none;
    }

    ::-webkit-calendar-picker-indicator {
      display: none;
    }

    @media (max-width: 420px) {
        min-width: 330px;
    }
    }

    .error {
      position: absolute;
      color: #d6362b;
      font-size: 0.875rem;
    }
  }
`;

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
