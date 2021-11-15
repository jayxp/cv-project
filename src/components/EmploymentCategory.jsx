import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";

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
        <ul>
          {userData.entry.details.length > 0 &&
            userData.entry.details.map((detail) => {
              return (
                <li key={detail.id}>
                  {detail.text}{" "}
                  <button
                    type="button"
                    onClick={() => userData.deleteDetail(detail)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
        <br />
        <button type="submit">Submit</button>
      </form>
      {userData.list.length > 0 &&
        userData.list.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.job.text}</p>
              <p>{element.company.text}</p>
              <p>{element.dateFrom.text}</p>
              <p>{element.dateTo.text}</p>
              <ul>
                {element.details.length > 0 &&
                  element.details.map((detail) => (
                    <li key={detail.id}>{detail.text}</li>
                  ))}
              </ul>
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
