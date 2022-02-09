import styled from "styled-components";
import { useEffect, useState } from "react";
import ErrorAlert from "../../assets/imgs/error.svg";
import SuccessAlert from "../../assets/imgs/success.svg";
import Modal from "./Modal";

import { cpf as CPF } from "cpf-cnpj-validator";
import useInput from "../../hooks/useInput";
import { formatZipcode, zipcodeOnlyNumbers } from "../../utils/cep";

const RegisterSty = styled.section`
  max-width: 1228px;
  min-height: calc(100vh - var(--header-height));
  margin-inline: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  form {
    display: flex;
    flex-direction: row;
    max-width: 1004px;
    flex-wrap: wrap;
    gap: 20px;

    justify-content: center;
    align-items: center;

    button {
      height: 52px;
      border-radius: var(--radius);
      background-color: var(--focus-color);
      color: white;
      min-width: 350px;
      margin-top: 1.7rem;
      border: 0;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      transtion: background-color 0.2s ease-in;

      @media (max-width: 730px) {
        margin-bottom: 2rem;
        margin-top: 0.8rem;
      }

      @media (max-width: 420px) {
        min-width: 330px;
      }

      &:hover {
        transtion: background-color 0.2s ease-in;
        background-color: var(--focus-color-hover);
      }
      &:focus {
        outline: 2px solid var(--focus-color-hover);
      }
    }
  }

  .control {
    margin-bottom: 0.5rem;
    min-width: 300px;

    label {
      display: block;

      font-weight: bold;
      margin-block: 0.5rem 0.2rem;
      color: var(--color-title-2);
    }

    input {
      height: 52px;
      min-width: 350px;
      border-radius: var(--radius);

      border: 1px solid var(--color-text);
      padding-left: 1rem;
      color: var(--color-title);

      ::placeholder {
        font-size: 1rem;

        color: var(--color-text);
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
    input[type="date"] {
      background-color: white;
    }
    input:focus {
      border: 2px solid var(--focus-color);
      outline: none;
    }

    .error {
      position: absolute;
      color: red;
      font-size: 0.875rem;
    }
  }

  .control.name {
    label {
      color: ${(props) => props.nameIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.nameIsInvalid && "1px solid red"};
    }
  }

  .control.cpf {
    label {
      color: ${(props) => props.cpfIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.cpfIsInvalid && "1px solid red"};
    }
  }

  .control.cep {
    label {
      color: ${(props) => props.cepIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.cepIsInvalid && "1px solid red"};
    }
  }

  .control.birth {
    label {
      color: ${(props) => props.birthIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.birthIsInvalid && "1px solid red"};
    }
  }

  .control.log {
    label {
      color: ${(props) => props.logIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.logIsInvalid && "1px solid red"};
    }
  }

  .control.comp {
    label {
      color: ${(props) => props.compIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.compIsInvalid && "1px solid red"};
    }
  }

  .control.bairro {
    label {
      color: ${(props) => props.bairroIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.bairroIsInvalid && "1px solid red"};
    }
  }

  .control.local {
    label {
      color: ${(props) => props.localIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.localIsInvalid && "1px solid red"};
    }
  }
  .control.uf {
    label {
      color: ${(props) => props.ufIsInvalid && "red"};
    }
    input {
      border: ${(props) => props.ufIsInvalid && "1px solid red"};
    }
  }

  .alert {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;

    color: white;
    border-radius: var(--radius);

    img {
      width: 30px;
    }

    &.error {
      background-color: red;
    }

    &.success {
      background-color: var(--focus-color);
    }
  }
`;

function Register() {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetName,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCpf,
    hasError: cpfInputHasError,
    reset: resetCpf,
    inputBlurHandler: cpfBlurHandler,
    inputChangeHandler: cpfChangeHandler,
  } = useInput((value) => value.trim() !== "" && value.length >= 11);

  const {
    value: enteredCep,
    isValid: enteredCepIsValid,
    hasError: cepInputHasError,
    reset: resetCep,
    inputBlurHandler: cepBlurHandler,
    inputChangeHandler: cepChangeHandler,
  } = useInput((value) => value.trim() !== "" && value.length >= 8);

  const {
    value: enteredBirth,
    isValid: enteredBirthIsValid,
    hasError: birthInputHasError,
    reset: resetBirth,
    inputBlurHandler: birthBlurHandler,
    inputChangeHandler: birthChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const [cepData, setCepData] = useState({
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const {
    value: enteredLogradouro,
    isValid: enteredLogradouroIsValid,
    hasError: logradouroInputHasError,
    reset: resetLogradouro,
    inputBlurHandler: logradouroBlurHandler,
    inputChangeHandler: logradouroChangeHandler,
    inputUpdateHandler: logradouroUpdateHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredComplemento,
    isValid: enteredComplementoIsValid,
    hasError: complementoInputHasError,
    reset: resetComplemento,
    inputBlurHandler: complementoBlurHandler,
    inputChangeHandler: complementoChangeHandler,
    inputUpdateHandler: complementoUpdateHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredBairro,
    isValid: enteredBairroIsValid,
    hasError: bairroInputHasError,
    reset: resetBairro,
    inputBlurHandler: bairroBlurHandler,
    inputChangeHandler: bairroChangeHandler,
    inputUpdateHandler: bairroUpdateHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLocalidade,
    isValid: enteredLocalidadeIsValid,
    hasError: localidadeInputHasError,
    reset: resetLocalidade,
    inputBlurHandler: localidadeBlurHandler,
    inputChangeHandler: localidadeChangeHandler,
    inputUpdateHandler: localidadeUpdateHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredUf,
    isValid: enteredUfIsValid,
    hasError: ufInputHasError,
    reset: resetUf,
    inputBlurHandler: ufBlurHandler,
    inputChangeHandler: ufChangeHandler,
    inputUpdateHandler: ufUpdateHandler,
  } = useInput((value) => value.trim() !== "");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 2000);
    return () => clearInterval(interval);
  });

  let cepOnlyNumbers = enteredCep;

  if (enteredCep.includes("-")) {
    cepOnlyNumbers = zipcodeOnlyNumbers(formatZipcode(enteredCep));
  }

  useEffect(() => {
    logradouroUpdateHandler(cepData.logradouro);

    complementoUpdateHandler(cepData.complemento);

    localidadeUpdateHandler(cepData.localidade);

    bairroUpdateHandler(cepData.bairro);

    ufUpdateHandler(cepData.uf);
  }, [
    cepData,
    logradouroUpdateHandler,
    complementoUpdateHandler,
    localidadeUpdateHandler,
    ufUpdateHandler,
    bairroUpdateHandler,
  ]);

  useEffect(() => {
    const fetchCEP = setTimeout(() => {
      if (/^[0-9]+$/.test(cepOnlyNumbers) && cepOnlyNumbers.length >= 8) {
        const updateData = ({
          logradouro,
          complemento,
          bairro,
          localidade,
          uf,
        }) => {
          setCepData({
            logradouro,
            complemento,
            bairro,
            localidade,
            uf,
          });
        };

        const options = {
          method: "GET",
          mode: "cors",
          cache: "default",
        };

        fetch(`https://viacep.com.br/ws/${cepOnlyNumbers}/json`, options)
          .then((res) => {
            if (!res.ok) {
              throw new Error(res.statusText);
            }
            return res.json();
          })
          .then((data) => {
            return updateData(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    }, 300);

    return () => {
      clearTimeout(fetchCEP);
    };
  }, [cepOnlyNumbers]);

  function formHandler(e) {
    e.preventDefault();

    if (!CPF.isValid(enteredCpf)) {
      setErrorMessage("CPF is invalid.");
      return;
    }

    if (!enteredCepIsValid && !/^[0-9]+$/.test(cepOnlyNumbers)) {
      setErrorMessage("CEP must contain only numbers.");
      return;
    }

    if (
      !enteredNameIsValid ||
      !enteredBirthIsValid ||
      !enteredLogradouroIsValid ||
      !enteredComplementoIsValid ||
      !enteredBairroIsValid ||
      !enteredLocalidadeIsValid ||
      !enteredUfIsValid
    ) {
      setErrorMessage("Preencha todos os campos de cadastro.");
      return;
    }

    const dataStorage = {
      enteredName,
      enteredBirth,
      enteredCpf,
      enteredCep,
      enteredLogradouro,
      enteredComplemento,
      enteredBairro,
      enteredLocalidade,
      enteredUf,
    };

    localStorage.setItem("@healthy", JSON.stringify(dataStorage));

    const expiresCookie = new Date(2023, 0, 1).toUTCString();
    document.cookie = `healthy=${JSON.stringify(
      dataStorage
    )}; expires=${expiresCookie}`;

    resetName();
    resetCpf();
    resetBirth();
    resetCep();
    resetLogradouro();
    resetComplemento();
    resetBairro();
    resetLocalidade();
    resetUf();

    setSuccessMessage("Cadastro efetuado com sucesso.");
    setModal(true);
  }

  return (
    <RegisterSty
      className="flex"
      id="register"
      nameIsInvalid={nameInputHasError}
      cpfIsInvalid={cpfInputHasError}
      cepIsInvalid={cepInputHasError}
      birthIsInvalid={birthInputHasError}
      logIsInvalid={logradouroInputHasError}
      compIsInvalid={complementoInputHasError}
      bairroIsInvalid={bairroInputHasError}
      localIsInvalid={localidadeInputHasError}
      ufIsInvalid={ufInputHasError}
    >
      <h1>Register</h1>

      {modal && <Modal closeModal={setModal} />}

      {successMessage && (
        <div className="alert flex success">
          <img src={SuccessAlert} alt="Success" />
          <p>{successMessage}</p>
        </div>
      )}
      {errorMessage && (
        <div className="alert flex error">
          <img src={ErrorAlert} alt="Error" />
          <p>{errorMessage}</p>
        </div>
      )}
      <form className="mulish__font" onSubmit={formHandler}>
        <div className="control name">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error">Name must not be empty.</p>
          )}
        </div>

        <div className="control cpf">
          <label htmlFor="cpf">CPF</label>
          <input
            type="number"
            placeholder="Somente números.."
            required
            id="cpf"
            onChange={cpfChangeHandler}
            onBlur={cpfBlurHandler}
            value={enteredCpf}
          />
          {cpfInputHasError && <p className="error">CPF is invalid.</p>}
        </div>

        <div className="control birth">
          <label htmlFor="birth">Data de Nascimento</label>
          <input
            type="date"
            required
            id="birth"
            onChange={birthChangeHandler}
            onBlur={birthBlurHandler}
            value={enteredBirth}
          />
          {birthInputHasError && <p className="error">Date is invalid.</p>}
        </div>

        <div className="control cep">
          <label htmlFor="cep">CEP</label>
          <input
            placeholder="Somente números.."
            type="text"
            required
            id="cep"
            onChange={cepChangeHandler}
            onBlur={cepBlurHandler}
            value={enteredCep}
          />
          {cepInputHasError && <p className="error">Cep is invalid.</p>}
        </div>

        {enteredCep.length >= 8 && (
          <>
            <div className="control log">
              <label htmlFor="logradouro">Endereço</label>
              <input
                type="text"
                required
                id="logradouro"
                onChange={logradouroChangeHandler}
                onBlur={logradouroBlurHandler}
                value={enteredLogradouro}
              />
              {logradouroInputHasError && (
                <p className="error">Logradouro cannot be empty.</p>
              )}
            </div>
            <div className="control comp">
              <label htmlFor="complemento">Complemento</label>
              <input
                required
                type="text"
                id="complemento"
                onChange={complementoChangeHandler}
                onBlur={complementoBlurHandler}
                value={enteredComplemento}
              />
              {complementoInputHasError && (
                <p className="error">Complemento cannot be empty.</p>
              )}
            </div>
            <div className="control bairro">
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                required
                id="bairro"
                onChange={bairroChangeHandler}
                onBlur={bairroBlurHandler}
                value={enteredBairro}
              />
              {bairroInputHasError && (
                <p className="error">Bairro cannot be empty.</p>
              )}
            </div>
            <div className="control local">
              <label htmlFor="localidade">Cidade</label>
              <input
                type="text"
                required
                id="localidade"
                onChange={localidadeChangeHandler}
                onBlur={localidadeBlurHandler}
                value={enteredLocalidade}
              />
              {localidadeInputHasError && (
                <p className="error">Localidade cannot be empty.</p>
              )}
            </div>
            <div className="control uf">
              <label htmlFor="uf">UF</label>
              <input
                type="text"
                required
                id="uf"
                onBlur={ufBlurHandler}
                onChange={ufChangeHandler}
                value={enteredUf}
              />
              {ufInputHasError && <p className="error">UF cannot be empty.</p>}
            </div>
          </>
        )}

        <button type="submit">Enviar</button>
      </form>
    </RegisterSty>
  );
}

export default Register;
