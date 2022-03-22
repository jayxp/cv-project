import React from "react";
import { Technical } from "../styles/Categories.styled";

export default function TechnicalList(props) {
  const { list } = props;

  return (
    list.display === true && (
      <Technical>
        <p>Languages: {list.languages.text}</p>
        <p>Frameworks and Libraries: {list.frameLibs.text}</p>
        <p>Tools: {list.tools.text}</p>
      </Technical>
    )
  );
}
