import React, { useState } from "react";
import Input from "./Input";

export default function TechnicalCategory(props) {
  const { data } = props;
  const { languages, frameLibs, tools } = data;
  const [list, setList] = useState({ display: false });
  const [entry, setEntry] = useState({ languages, frameLibs, tools });

  const handleChange = (event) => {
    setEntry((prevState) => {
      return {
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          text: event.target.value,
        },
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList({
      ...entry,
      display: true,
    });
    setEntry({
      ...data,
    });
  };

  return (
    <>
      <h2>Technical Skills</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <Input data={entry.languages} onChange={handleChange} />
        <br />
        <Input data={entry.frameLibs} onChange={handleChange} />
        <br />
        <Input data={entry.tools} onChange={handleChange} />
        <br />
        <br />
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
