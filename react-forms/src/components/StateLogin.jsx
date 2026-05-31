import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "../hooks/useInput";

const Login = () => {
  const {
    value: emailValue,
    hasError: emailHasError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", (value) => isNotEmpty(value) && isEmail(value));

  const {
    value: passwordValue,
    hasError: passwordHasError,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) return;
    console.log("Form Submitted", inputValue);
    setInputValue({ email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={(e) => handleEmailChange(e.target.value)}
          value={emailValue}
          error={emailHasError && "Please enter a valid email address!"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={(e) => handlePasswordChange(e.target.value)}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
};
export default Login;
