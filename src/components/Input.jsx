import React from "react";

const Input = (props) => {
  const { data } = props;
  const { text, name, type, description, example } = data;
  const handleChange = (event) => props.onChange(event);

  return (
    <>
      <label htmlFor={text}>{description}</label>
      <br />
      <input
        value={text}
        name={name}
        type={type}
        placeholder={example}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
