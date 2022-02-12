import { useCallback, useState } from "react";
import { CPFValidation } from "../utils/cpf";

const useInput = (validateValue, isCPF = null) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid = validateValue(enteredValue);

  if (isCPF) {
    valueIsValid = validateValue(enteredValue) && CPFValidation(enteredValue);
  }

  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputUpdateHandler = useCallback((value) => {
    setEnteredValue(value);
  }, []);

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    reset,
    inputBlurHandler,
    inputChangeHandler,
    inputUpdateHandler,
  };
};

export default useInput;
