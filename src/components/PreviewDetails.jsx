import React from "react";
import StyledButton from "../styles/Button.styled";

export default function PreviewDetails({ entry, deleteDetail }) {
  return (
    <ul>
      {entry.details.length > 0 &&
        entry.details.map((detail) => (
          <li key={detail.id}>
            {detail.text}{" "}
            <StyledButton
              top="0px"
              color="red"
              type="button"
              onClick={() => deleteDetail(detail)}
            >
              Delete
            </StyledButton>
          </li>
        ))}
    </ul>
  );
}
