import { cpf } from "cpf-cnpj-validator";

export const CPFValidation = (value) => cpf.isValid(value);
