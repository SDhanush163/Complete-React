import Input from "./Input";

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
