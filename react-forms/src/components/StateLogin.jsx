import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(inputValue.email) &&
    !isNotEmpty(inputValue.email);

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(inputValue.password, 6);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", inputValue);
    setInputValue({ email: "", password: "" });
  };

  const handleInputChange = (identifier, value) => {
    setDidEdit((prev) => ({ ...prev, [identifier]: false }));
    setInputValue((prev) => ({ ...prev, [identifier]: value }));
  };

  const handleInputBlur = (identifier) =>
    setDidEdit((prev) => ({ ...prev, [identifier]: true }));

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={inputValue.email}
          error={emailIsInvalid && "Please enter a valid email address!"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={inputValue.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
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
