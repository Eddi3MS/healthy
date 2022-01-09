import styled from "styled-components";
import { useEffect, useState } from "react";
import ErrorAlert from "../../assets/imgs/error.svg";
import SuccessAlert from "../../assets/imgs/success.svg";
import Modal from "./Modal";

import { cpf as CPF } from "cpf-cnpj-validator";

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
      font-family: mulish, sans-serif;
      font-weight: bold;
      margin-block: 0.5rem 0.2rem;
      color: var(--color-title-2);
    }

    input {
      height: 52px;
      min-width: 350px;
      border-radius: var(--radius);
      font-family: mulish, sans-serif;
      border: 1px solid var(--color-text);
      padding-left: 1rem;
      color: var(--color-title);

      ::placeholder {
        font-family: mulish, sans-serif;
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
    }
    input[type="date"] {
      background-color: white;
    }
    input:focus {
      border: 2px solid var(--focus-color);
      outline: none;
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
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");

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

  useEffect(() => {
    /* const localData = localStorage.getItem("@healthy");

     if (localData) {
      const data = JSON.parse(localData);

      setName(data.name);
      setCpf(data.cpf);
      setBirth(data.birth);
      setCep(data.cep);
      setLogradouro(data.logradouro);
      setComplemento(data.complemento);
      setBairro(data.bairro);
      setLocalidade(data.localidade);
      setUf(data.uf);

      return;
    } */

    if (cep.trim() !== "" && cep.length === 8 && /^[0-9]+$/.test(cep)) {
      const updateData = ({
        logradouro,
        complemento,
        bairro,
        localidade,
        uf,
      }) => {
        setLogradouro(logradouro);
        setComplemento(complemento);
        setBairro(bairro);
        setLocalidade(localidade);
        setUf(uf);
      };

      const options = {
        method: "GET",
        mode: "cors",
        cache: "default",
      };

      fetch(`https://viacep.com.br/ws/${cep}/json`, options)
        .then((res) => {
          res.json().then((data) => {
            return updateData(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // buscar na api, setar local storage, setar stored=true
  }, [cep, cpf, name, birth]);

  function formHandler(e) {
    e.preventDefault();

    if (!CPF.isValid(cpf)) {
      setErrorMessage("CPF Inválido.");
      return;
    }

    if (
      name.trim() === "" ||
      birth.trim() === "" ||
      bairro.trim() === "" ||
      cep.trim() === "" ||
      logradouro.trim() === "" ||
      localidade.trim() === "" ||
      uf.trim() === ""
    ) {
      setErrorMessage("Preencha todos os campos de cadastro.");
      return;
    }

    const dataStorage = {
      name,
      birth,
      cpf,
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
    };

    localStorage.setItem("@healthy", JSON.stringify(dataStorage));

    document.cookie = `healthy=${JSON.stringify(dataStorage)}`;

    setName("");
    setBirth("");
    setCpf("");
    setCep("");
    setLogradouro("");
    setComplemento("");
    setLocalidade("");
    setUf("");
    setBairro("");
    setSuccessMessage("Cadastro efetuado com sucesso.");
    setModal(true);
  }

  return (
    <RegisterSty className="flex" id="register">
      <h1>Register</h1>

      {modal ? <Modal closeModal={setModal} /> : null}

      {successMessage !== "" ? (
        <div className="alert flex success">
          <img src={SuccessAlert} alt="Success" />
          <p>{successMessage}</p>
        </div>
      ) : null}
      {errorMessage !== "" ? (
        <div className="alert flex error">
          <img src={ErrorAlert} alt="Error" />
          <p>{errorMessage}</p>
        </div>
      ) : null}
      <form onSubmit={formHandler}>
        <div className="control">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            required
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="control">
          <label htmlFor="cpf">CPF</label>
          <input
            type="number"
            placeholder="987654321"
            required
            id="cpf"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
        </div>

        <div className="control">
          <label htmlFor="birth">Data de Nascimento</label>
          <input
            type="date"
            required
            id="birth"
            onChange={(e) => setBirth(e.target.value)}
            value={birth}
          />
        </div>

        <div className="control">
          <label htmlFor="cep">CEP</label>
          <input
            placeholder="12345678"
            required
            id="cep"
            onChange={(e) => {
              setCep(e.target.value);
            }}
            value={cep}
          />
        </div>

        {cep.length === 8 ? (
          <>
            <div className="control">
              <label htmlFor="logradouro">Endereço</label>
              <input
                type="text"
                required
                id="logradouro"
                onChange={(e) => setLogradouro(e.target.value)}
                value={logradouro}
              />
            </div>
            <div className="control">
              <label htmlFor="complemento">Complemento</label>
              <input
                type="text"
                id="complemento"
                onChange={(e) => setComplemento(e.target.value)}
                value={complemento}
              />
            </div>
            <div className="control">
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                required
                id="bairro"
                onChange={(e) => setBairro(e.target.value)}
                value={bairro}
              />
            </div>
            <div className="control">
              <label htmlFor="localidade">Cidade</label>
              <input
                type="text"
                required
                id="localidade"
                onChange={(e) => setLocalidade(e.target.value)}
                value={localidade}
              />
            </div>
            <div className="control">
              <label htmlFor="uf">UF</label>
              <input
                type="text"
                required
                id="uf"
                onChange={(e) => setUf(e.target.value)}
                value={uf}
              />
            </div>
          </>
        ) : null}

        <button type="submit">Enviar</button>
      </form>
    </RegisterSty>
  );
}

export default Register;
