import React, { useState } from "react";
import Input from "./Input";

export default function HeaderCategory(props) {
  const { data } = props;
  const { email, phone, name, website, github } = data;
  const [list, setList] = useState({ display: false });
  const [entry, setEntry] = useState({
    email,
    phone,
    name,
    website,
    github,
  });

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
      display: true,
      ...entry,
    });
    setEntry({
      ...data,
    });
  };

  return (
    <>
      <form>
        <Input data={entry.email} onChange={handleChange} />
        <br />
        <Input data={entry.phone} onChange={handleChange} />
        <br />
        <Input data={entry.name} onChange={handleChange} />
        <br />
        <Input data={entry.website} onChange={handleChange} />
        <br />
        <Input data={entry.github} onChange={handleChange} />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {list.display === true && (
        <>
          <p>{list.email.text}</p>
          <p>{list.phone.text}</p>
          <p>{list.name.text}</p>
          <p>{list.website.text}</p>
          <p>{list.github.text}</p>
        </>
      )}
    </>
  );
}
