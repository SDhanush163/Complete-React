import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results/Results";
import UserInput from "./components/UserInput/UserInput";

const INITIAL_INPUTS = {
  initialInvestment: "",
  monthlyInvestment: "",
  expectedReturn: "",
  duration: "",
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUTS);
  const isValidInput = userInput.duration > 0;

  const handleChange = (identifier, newValue) =>
    setUserInput((prevInput) => ({ ...prevInput, [identifier]: newValue }));

  return (
    <>
      <Header />
      <UserInput inputs={userInput} onChange={handleChange} />
      {!isValidInput && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {isValidInput && <Results inputs={userInput} />}
    </>
  );
}

export default App;
