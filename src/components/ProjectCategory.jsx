import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";
import ProjectList from "./ProjectList";
import PreviewDetails from "./PreviewDetails";

export default function ProjectCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <>
      <h2>Projects</h2>
      <hr />
      <form onSubmit={userData.handleSubmitExt}>
        <Input data={userData.entry.pName} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.link} onChange={userData.handleChange} />
        <br />
        <Input
          data={userData.entry.detailInput}
          onChange={userData.handleChange}
        />{" "}
        <button type="button" onClick={userData.addDetail}>
          Add
        </button>
        <br />
        <PreviewDetails
          entry={userData.entry}
          deleteDetail={userData.deleteDetail}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <ProjectList list={userData.list} deleteEntry={userData.deleteEntry} />
    </>
  );
}
