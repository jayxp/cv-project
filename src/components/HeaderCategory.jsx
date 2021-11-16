import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";
import HeaderList from "./HeaderList";

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
      <HeaderList list={userData.list} />
    </>
  );
}
