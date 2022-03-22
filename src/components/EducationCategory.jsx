import React from "react";
import Input from "./Input";
import useHelper from "../utils/useHelper";
import EducationList from "./EducationList";
import StyledForm from "../styles/Form.styled";
import StyledButton from "../styles/Button.styled";
import { Category } from "../styles/Categories.styled";

export default function EducationCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <Category>
      <h2>Education</h2>
      <hr />
      <StyledForm onSubmit={userData.handleSubmitExt}>
        <Input
          data={userData.entry.location}
          onChange={userData.handleChange}
        />
        <Input data={userData.entry.college} onChange={userData.handleChange} />
        <Input
          data={userData.entry.dateFrom}
          onChange={userData.handleChange}
        />
        <Input data={userData.entry.dateTo} onChange={userData.handleChange} />
        <Input data={userData.entry.degree} onChange={userData.handleChange} />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <EducationList list={userData.list} deleteEntry={userData.deleteEntry} />
    </Category>
  );
}
