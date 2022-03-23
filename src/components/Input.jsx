import React from "react";
import StyledInput from "../styles/Input.styled";

const Input = (props) => {
  const { data, required } = props;
  const { text, name, type, description, example } = data;
  // eslint-disable-next-line
  const handleChange = (event) => props.onChange(event);

  const isRequired = required === true;

  return (
    <>
      <label htmlFor={name}>{description}</label>
      <StyledInput
        value={text}
        name={name}
        type={type}
        placeholder={example}
        onChange={handleChange}
        required={isRequired}
      />
    </>
  );
};

export default Input;
