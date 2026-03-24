import React from "react";
const STYLES = {
  container: "flex flex-col gap-1 my-4",
  label: "text-sm font-bold uppercase text-stone-500",
  input: "w-full p-1 border-b-2 rounded-sm ",
  inputColor: "border-stone-300 bg-stone-200 text-stone-600",
  inputFocus: "focus:outline-none focus:border-stone-600",
};
const Input = ({ textArea, label, ...props }) => {
  const toCamelCase = (s) => s.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  const id = toCamelCase(label);

  return (
    <p className={STYLES.container}>
      <label htmlFor={id} className={STYLES.label}>
        {label}
      </label>
      {textArea ? (
        <textarea
          id={id}
          className={`${STYLES.input} ${STYLES.inputColor} ${STYLES.inputFocus}`}
          {...props}
        ></textarea>
      ) : (
        <input
          id={id}
          className={`${STYLES.input} ${STYLES.inputColor} ${STYLES.inputFocus}`}
          {...props}
        />
      )}
    </p>
  );
};

export default Input;
