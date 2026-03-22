import Input from "./Input";
/* --------------------------------------------------------
User input component - Takes the object from the app and 
    builds the inputs from it and on changing a field value
    pushes it back to the app
-------------------------------------------------------- */
const UserInput = ({
  onChange,
  inputs: { initialInvestment, monthlyInvestment, expectedReturn, duration },
}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          id="initialInvestment"
          label="Initial Investment"
          value={initialInvestment}
          onChange={onChange}
        />
        <Input
          id="monthlyInvestment"
          label="Monthly SIP"
          value={monthlyInvestment}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <Input
          id="expectedReturn"
          label="Expected Return"
          value={expectedReturn}
          onChange={onChange}
        />
        <Input
          id="duration"
          label="Duration"
          value={duration}
          onChange={onChange}
        />
      </div>
    </section>
  );
};

export default UserInput;
