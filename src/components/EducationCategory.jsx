import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";

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
      {userData.list.length > 0 &&
        userData.list.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.location.text}</p>
              <p>{element.college.text}</p>
              <p>{element.dateFrom.text}</p>
              <p>{element.dateTo.text}</p>
              <p>{element.degree.text}</p>
              <button
                type="button"
                onClick={() => userData.deleteEntry(element)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}
