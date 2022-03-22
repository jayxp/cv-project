import React from "react";
import Input from "./Input";
import useHelper from "../utils/useHelper";
import ProjectList from "./ProjectList";
import PreviewDetails from "./PreviewDetails";
import StyledButton from "../styles/Button.styled";
import StyledForm from "../styles/Form.styled";
import { Category } from "../styles/Categories.styled";

export default function ProjectCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <Category>
      <h2>Projects</h2>
      <hr />
      <StyledForm onSubmit={userData.handleSubmitExt}>
        <Input
          data={userData.entry.pName}
          onChange={userData.handleChange}
          required
        />
        <Input data={userData.entry.link} onChange={userData.handleChange} />
        <Input
          data={userData.entry.detailInput}
          onChange={userData.handleChange}
        />
        <StyledButton
          top="0px"
          color="#2822bf"
          type="button"
          size="90%"
          radius="5px"
          onClick={userData.addDetail}
        >
          Add
        </StyledButton>
        <PreviewDetails
          entry={userData.entry}
          deleteDetail={userData.deleteDetail}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      {/* End Test Form */}
      <ProjectList list={userData.list} deleteEntry={userData.deleteEntry} />
    </Category>
  );
}
