import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";
import EducationList from "./EducationList";

export default function EducationCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <>
      <h2>Education</h2>
      <hr />
      <form onSubmit={userData.handleSubmitExt}>
        <Input
          data={userData.entry.location}
          onChange={userData.handleChange}
        />
        <br />
        <Input data={userData.entry.college} onChange={userData.handleChange} />
        <br />
        <Input
          data={userData.entry.dateFrom}
          onChange={userData.handleChange}
        />
        <br />
        <Input data={userData.entry.dateTo} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.degree} onChange={userData.handleChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
      <EducationList list={userData.list} deleteEntry={userData.deleteEntry} />
    </>
  );
}
