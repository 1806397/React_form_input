import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [IsTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);

  // (value) => value.trim !== ""
  // validateValue(enteredValue){
  //   return value.trim!==""
  // }

  const hasError = !enteredValue && IsTouched;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = (event) => {
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
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
export default useInput;
