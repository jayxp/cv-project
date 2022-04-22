import React from "react";
import Input from "./Input";
import ProjectList from "./ProjectList";
import PreviewDetails from "./PreviewDetails";
import StyledButton from "../styles/Button.styled";
import StyledForm from "../styles/Form.styled";
import { Category } from "../styles/Categories.styled";

export default function ProjectCategory({ data }) {
  const {
    entry,
    list,
    handleSubmit,
    handleChange,
    addDetail,
    deleteDetail,
    deleteEntry,
  } = data;
  const { pName, link, detailInput } = entry;

  return (
    <Category>
      <h2>Projects</h2>
      <hr />
      <StyledForm onSubmit={handleSubmit}>
        <Input data={pName} onChange={handleChange} required />
        <Input data={link} onChange={handleChange} />
        <Input data={detailInput} onChange={handleChange} />
        <StyledButton
          top="5px"
          color="#2822bf"
          type="button"
          size="90%"
          radius="5px"
          onClick={addDetail}
        >
          Add Detail
        </StyledButton>
        <PreviewDetails entry={entry} deleteDetail={deleteDetail} />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <ProjectList list={list} deleteEntry={deleteEntry} />
    </Category>
  );
}

/*
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
          top="5px"
          color="#2822bf"
          type="button"
          size="90%"
          radius="5px"
          onClick={userData.addDetail}
        >
          Add Detail
        </StyledButton>
        <PreviewDetails
          entry={userData.entry}
          deleteDetail={userData.deleteDetail}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <ProjectList list={userData.list} deleteEntry={userData.deleteEntry} />
    </Category>
  );
}
*/
