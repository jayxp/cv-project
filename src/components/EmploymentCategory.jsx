import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";
import EmploymentList from "./EmploymentList";
import PreviewDetails from "./PreviewDetails";

export default function EmploymentCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <>
      <h2>Employment</h2>
      <hr />
      <form onSubmit={userData.handleSubmitExt}>
        <Input data={userData.entry.job} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.company} onChange={userData.handleChange} />
        <br />
        <Input
          data={userData.entry.dateFrom}
          onChange={userData.handleChange}
        />
        <br />
        <Input data={userData.entry.dateTo} onChange={userData.handleChange} />
        <br />
        <Input
          data={userData.entry.detailInput}
          onChange={userData.handleChange}
        />{" "}
        <button type="button" onClick={userData.addDetail}>
          Add
        </button>
        <PreviewDetails
          entry={userData.entry}
          deleteDetail={userData.deleteDetail}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <EmploymentList list={userData.list} deleteEntry={userData.deleteEntry} />
    </>
  );
}
