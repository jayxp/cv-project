import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";

export default function HeaderCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <>
      <h2>Header</h2>
      <hr />
      <form onSubmit={userData.handleSubmit}>
        <Input data={userData.entry.email} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.phone} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.name} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.website} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.github} onChange={userData.handleChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {userData.list.display === true && (
        <>
          <p>{userData.list.email.text}</p>
          <p>{userData.list.phone.text}</p>
          <p>{userData.list.name.text}</p>
          <p>{userData.list.website.text}</p>
          <p>{userData.list.github.text}</p>
        </>
      )}
    </>
  );
}
