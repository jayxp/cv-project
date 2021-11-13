import React, { useState } from "react";
import Input from "./Input";

export default function TechnicalCategory(props) {
  const { data } = props;
  const { languages, frameLibs, tools } = data;
  const [list, setList] = useState({ display: false });
  const [entry, setEntry] = useState({ languages, frameLibs, tools });

  function handleChange(event) {
    setEntry((prevState) => {
      return {
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          text: event.target.value,
        },
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList({
      display: true,
      ...entry,
    });
    setEntry({
      ...data,
    });
  }

  return (
    <>
      <h2>Technical Skills</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <p>
          Languages: <Input data={entry.languages} onChange={handleChange} />
        </p>
        <p>
          Frameworks and Libraries:{" "}
          <Input data={entry.frameLibs} onChange={handleChange} />
        </p>
        <p>
          Tools: <Input data={entry.tools} onChange={handleChange} />
        </p>
        <button type="submit">Submit</button>
      </form>
      {list.display === true && (
        <>
          <p>Languages: {list.languages.text}</p>
          <p>Frameworks and Libraries: {list.frameLibs.text}</p>
          <p>Tools: {list.tools.text}</p>
        </>
      )}
    </>
  );
}
