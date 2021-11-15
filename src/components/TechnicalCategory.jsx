import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";

export default function TechnicalCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <>
      <h2>Technical Skills</h2>
      <hr />
      <form onSubmit={userData.handleSubmit}>
        <Input
          data={userData.entry.languages}
          onChange={userData.handleChange}
        />
        <br />
        <Input
          data={userData.entry.frameLibs}
          onChange={userData.handleChange}
        />
        <br />
        <Input data={userData.entry.tools} onChange={userData.handleChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {userData.list.display === true && (
        <>
          <p>Languages: {userData.list.languages.text}</p>
          <p>Frameworks and Libraries: {userData.list.frameLibs.text}</p>
          <p>Tools: {userData.list.tools.text}</p>
        </>
      )}
    </>
  );
}
