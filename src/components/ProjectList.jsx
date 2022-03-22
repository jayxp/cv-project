import React from "react";
import StyledButton from "../styles/Button.styled";
import { Project } from "../styles/Categories.styled";

export default function ProjectList(props) {
  const { list, deleteEntry } = props;

  return (
    list.length > 0 &&
    list.map((entry) => {
      return (
        <Project key={entry.id}>
          <p className="title">{entry.pName.text}</p>
          <p className="link">{entry.link.text}</p>
          <ul className="list">
            {entry.details.length > 0 &&
              entry.details.map((detail) => (
                <li key={detail.id}>{detail.text}</li>
              ))}
          </ul>
          <StyledButton
            color="red"
            type="button"
            onClick={() => deleteEntry(entry)}
          >
            Delete
          </StyledButton>
        </Project>
      );
    })
  );
}
