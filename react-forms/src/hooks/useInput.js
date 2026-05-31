import React, { useState } from "react";

const useInput = (defaultValue, validationFn) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(inputValue);

  const handleInputChange = (event) => {
    setDidEdit(false);
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => setDidEdit(true);

  return {
    value: inputValue,
    hasError: didEdit && !valueIsValid,
    handleInputChange,
    handleInputBlur,
  };
};

export default useInput;
