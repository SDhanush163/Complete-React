import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results/Results";
import UserInput from "./components/UserInput/UserInput";

/* --------------------------------------------------------
Global components - Initial inputs 
-------------------------------------------------------- */

const INITIAL_INPUTS = {
  initialInvestment: "",
  monthlyInvestment: "",
  expectedReturn: "",
  duration: "",
};

/* --------------------------------------------------------
Main app component - 
  - userInput > Handles the user data in the form
  - isValidInput > The data is valid only if the duration is 
      1 year or more

  - handleChange > Lifting the user inputs form up to the 
      app so that it can be sent to the Results for 
      computing the profits
-------------------------------------------------------- */
function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUTS);
  const isValidInput = userInput.duration > 0;

  const handleChange = (identifier, newValue) =>
    setUserInput((prevInput) => ({ ...prevInput, [identifier]: newValue }));

  // --------------------------------------------------------
  // Screen
  // --------------------------------------------------------
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
