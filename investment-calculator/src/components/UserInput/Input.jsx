const Input = ({ id, label, onChange, value }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        required
        value={value}
        onFocus={(event) => event.target.select()}
        onChange={(event) => onChange(id, event.target.value)}
      />
    </p>
  );
};

export default Input;
