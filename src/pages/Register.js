import Header from "../components/layout/HeaderRegister";
import styled from "styled-components";
import { useEffect, useState } from "react";

import validator from "cpf-cnpj-validator";

const Joi = require("@hapi/joi").extend(validator);

const cpfSchema = Joi.document().cpf();

const RegisterSty = styled.main`
  max-width: 1228px;
  min-height: calc(100vh - var(--header-height));
  margin-inline: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .control {
    margin-bottom: 0.5rem;
    min-width: 300px;

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    input {
      display: block;
      font: inherit;
      border-radius: 4px;
      border: 1px solid #ccc;
      padding: 0.25rem;
      width: 100%;
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

  useEffect(() => {
    cep.replace(".", "").replace("-", "");

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

    if (
      name.trim() === "" ||
      birth.trim() === "" ||
      bairro.trim() === "" ||
      cpf.trim() === "" ||
      cep.trim() === "" ||
      logradouro.trim() === "" ||
      localidade.trim() === "" ||
      uf.trim() === "" ||
      !cpfSchema.validate(cpf)
    ) {
      // setErrorMessage("Preencha todos os campos de cadastro.");
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
  }

  const test = localStorage.getItem("@healthy");
  console.log(test);

  return (
    <>
      <Header />
      <RegisterSty className="flex">
        <h1>Register</h1>

        <form onSubmit={formHandler}>
          <div className="control">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              required
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
            <label htmlFor="cpf">CPF</label>
            <input
              type="number"
              required
              id="cpf"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
            />
          </div>

          <div className="control">
            <label htmlFor="cep">CEP</label>
            <input
              type="number"
              required
              id="cep"
              onChange={(e) => {
                let enteredCep = e.target.value;
                let finalCep = enteredCep.replace("-", "").replace(".", "");
                setCep(finalCep);
              }}
              value={cep}
            />
          </div>

          {cep.length >= 8 ? (
            <>
              {" "}
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
                  required
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
    </>
  );
}

export default Register;
