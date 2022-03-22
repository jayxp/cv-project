import React from "react";
import Input from "./Input";
import useHelper from "../utils/useHelper";
import ContactList from "./ContactList";
import StyledForm from "../styles/Form.styled";
import StyledButton from "../styles/Button.styled";
import { Category } from "../styles/Categories.styled";

export default function ContactCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <Category>
      <hr />
      <StyledForm onSubmit={userData.handleSubmit}>
        <Input
          data={userData.entry.email}
          onChange={userData.handleChange}
          required
        />
        <Input
          data={userData.entry.phone}
          onChange={userData.handleChange}
          required
        />
        <Input
          data={userData.entry.name}
          onChange={userData.handleChange}
          required
        />
        <Input data={userData.entry.website} onChange={userData.handleChange} />
        <Input data={userData.entry.github} onChange={userData.handleChange} />
        <Input
          data={userData.entry.linkedin}
          onChange={userData.handleChange}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <ContactList list={userData.list} />
    </Category>
  );
}
