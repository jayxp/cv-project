import React from "react";
import Input from "./Input";
import useHelper from "../utils/useHelper";
import TechnicalList from "./TechnicalList";
import StyledForm from "../styles/Form.styled";
import StyledButton from "../styles/Button.styled";
import { Category } from "../styles/Categories.styled";

export default function TechnicalCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <Category>
      <h2>Technical Skills</h2>
      <hr />
      <StyledForm onSubmit={userData.handleSubmit}>
        <Input
          data={userData.entry.languages}
          onChange={userData.handleChange}
        />
        <Input
          data={userData.entry.frameLibs}
          onChange={userData.handleChange}
        />
        <Input data={userData.entry.tools} onChange={userData.handleChange} />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <TechnicalList list={userData.list} />
    </Category>
  );
}
