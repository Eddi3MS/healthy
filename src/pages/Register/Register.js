import { useEffect, useState } from "react";
import styled from "styled-components";

import ErrorAlert from "../../assets/imgs/error.svg";
import SuccessAlert from "../../assets/imgs/success.svg";
import Modal from "./Modal";
import useInput from "../../hooks/useInput";
import { formatZipcode, zipcodeOnlyNumbers } from "../../utils/cep";
import { CPFValidation } from "../../utils/cpf";
import Input from "../../components/layout/Input";

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
  } = useInput((value) => value.trim() !== "" && value.length === 11, true);

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

  // set state after fetch cep
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

  let cepOnlyNumbers = enteredCep;

  if (enteredCep.includes("-")) {
    cepOnlyNumbers = zipcodeOnlyNumbers(formatZipcode(enteredCep));
  }

  useEffect(() => {
    const updateData = (response) => {
      if (response.erro === true) {
        setErrorMessage("CEP é invalido.");
        return;
      }

      const { logradouro, complemento, bairro, localidade, uf } = response;
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

    const fetchCEP = setTimeout(async () => {
      if (/^[0-9]+$/.test(cepOnlyNumbers) && cepOnlyNumbers.length >= 8) {
        try {
          const viacep = await fetch(
            `https://viacep.com.br/ws/${cepOnlyNumbers}/json`,
            options
          );

          const response = await viacep.json();
          updateData(response);
        } catch (error) {
          console.log(error);
        }
      }
    }, 300);

    return () => {
      clearTimeout(fetchCEP);
    };
  }, [cepOnlyNumbers]);

  let formError = false;

  if (
    !enteredNameIsValid ||
    !enteredBirthIsValid ||
    !enteredLogradouroIsValid ||
    !enteredComplementoIsValid ||
    !enteredBairroIsValid ||
    !enteredLocalidadeIsValid ||
    !enteredUfIsValid
  ) {
    formError = true;
  }

  function formHandler(e) {
    e.preventDefault();

    if (formError) {
      setErrorMessage("Preencha todos os campos do formulário.");
      return;
    }

    if (!CPFValidation(enteredCpf)) {
      setErrorMessage("Insira um cpf válido. (apenas números)");
      return;
    }

    if (!enteredCepIsValid && !/^[0-9]+$/.test(cepOnlyNumbers)) {
      setErrorMessage("CEP deve conter apenas números.");
      return;
    }

    const dataStorage = {
      name: enteredName,
      birth: enteredBirth,
      cpf: enteredCpf,
      cep: enteredCep,
      logradouro: enteredLogradouro,
      complemento: enteredComplemento,
      bairro: enteredBairro,
      localidade: enteredLocalidade,
      uf: enteredUf,
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
        <Input
          id="name"
          label="Nome"
          error="Nome não pode ser vazio."
          inputHasError={nameInputHasError}
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />

        <Input
          id="cpf"
          label="CPF"
          error="Insira um CPF válido."
          inputHasError={cpfInputHasError}
          type="number"
          onChange={cpfChangeHandler}
          onBlur={cpfBlurHandler}
          value={enteredCpf}
        />

        <Input
          id="birth"
          label="Data de Nascimento"
          error="Data de nascimento não pode ser vazio."
          inputHasError={birthInputHasError}
          type="date"
          onChange={birthChangeHandler}
          onBlur={birthBlurHandler}
          value={enteredBirth}
        />

        <Input
          id="cep"
          label="CEP"
          error="Insira um cep válido."
          inputHasError={cepInputHasError}
          type="text"
          onChange={cepChangeHandler}
          onBlur={cepBlurHandler}
          value={enteredCep}
        />

        {cepOnlyNumbers.length >= 8 && (
          <>
            <Input
              id="logradouro"
              label="Endereço"
              error="Endereço não pode ser vazio."
              inputHasError={logradouroInputHasError}
              type="text"
              onChange={logradouroChangeHandler}
              onBlur={logradouroBlurHandler}
              value={enteredLogradouro}
            />

            <Input
              id="complemento"
              label="Complemento"
              error="Complemento não pode ser vazio."
              inputHasError={complementoInputHasError}
              type="text"
              onChange={complementoChangeHandler}
              onBlur={complementoBlurHandler}
              value={enteredComplemento}
            />

            <Input
              id="bairro"
              label="Bairro"
              error="Bairro não pode ser vazio."
              inputHasError={bairroInputHasError}
              type="text"
              onChange={bairroChangeHandler}
              onBlur={bairroBlurHandler}
              value={enteredBairro}
            />

            <Input
              id="localidade"
              label="Cidade"
              error="Cidade não pode ser vazio."
              inputHasError={localidadeInputHasError}
              type="text"
              onChange={localidadeChangeHandler}
              onBlur={localidadeBlurHandler}
              value={enteredLocalidade}
            />

            <Input
              id="uf"
              label="Estado"
              error="Estado não pode ser vazio."
              inputHasError={ufInputHasError}
              type="text"
              onChange={ufChangeHandler}
              onBlur={ufBlurHandler}
              value={enteredUf}
            />
          </>
        )}

        <button type="submit">Enviar</button>
      </form>
    </RegisterSty>
  );
}

export default Register;
