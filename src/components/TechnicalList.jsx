import React from "react";
import { Technical } from "../styles/Categories.styled";

export default function TechnicalList({ list }) {
  return (
    list.length > 0 &&
    list.map((entry) => {
      const { id, languages, frameLibs, tools } = entry;
      return (
        <Technical key={id}>
          <p>Languages: {languages.text}</p>
          <p>Frameworks & Libraries: {frameLibs.text}</p>
          <p>Tools: {tools.text}</p>
        </Technical>
      );
    })
  );
}

/* 
export default function TechnicalList({ list }) {
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
*/
