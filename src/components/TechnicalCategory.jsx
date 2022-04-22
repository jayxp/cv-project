import React from "react";
import Input from "./Input";
import TechnicalList from "./TechnicalList";
import StyledForm from "../styles/Form.styled";
import StyledButton from "../styles/Button.styled";
import { Category } from "../styles/Categories.styled";

export default function TechnicalCategory({ data }) {
  const { entry, list, handleChange, handleSubmit, deleteList } = data;
  const { languages, frameLibs, tools } = entry;

  return (
    <Category>
      <h2>Technical Skills</h2>
      <hr />
      <StyledForm onSubmit={handleSubmit}>
        <Input data={languages} onChange={handleChange} />
        <Input data={frameLibs} onChange={handleChange} />
        <Input data={tools} onChange={handleChange} />
        <StyledButton type="submit" onClick={() => deleteList(list)}>
          Submit
        </StyledButton>
      </StyledForm>
      <TechnicalList list={list} />
    </Category>
  );
}

/* 
import React from "react";
import Input from "./Input";
import useHelper from "../utils/useHelper";
import TechnicalList from "./TechnicalList";
import StyledForm from "../styles/Form.styled";
import StyledButton from "../styles/Button.styled";
import { Category } from "../styles/Categories.styled";

export default function TechnicalCategory({ data }) {
  const userData = useHelper({ ...data });
  const { languages, frameLibs, tools } = userData.entry;

  return (
    <Category>
      <h2>Technical Skills</h2>
      <hr />
      <StyledForm onSubmit={userData.handleSubmit}>
        <Input data={languages} onChange={userData.handleChange} />
        <Input data={frameLibs} onChange={userData.handleChange} />
        <Input data={tools} onChange={userData.handleChange} />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <TechnicalList list={userData.list} />
    </Category>
  );
}
*/
