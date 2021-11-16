import React from "react";

export default function TechnicalList(props) {
  const { list } = props;

  return (
    list.display === true && (
      <>
        <p>Languages: {list.languages.text}</p>
        <p>Frameworks and Libraries: {list.frameLibs.text}</p>
        <p>Tools: {list.tools.text}</p>
      </>
    )
  );
}
