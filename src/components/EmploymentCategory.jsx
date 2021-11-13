import React, { useState } from "react";
import uniqid from "uniqid";
import Input from "./Input";

export default function EmploymentCategory(props) {
  const { data } = props;
  const { empList, id, job, company, dateFrom, dateTo, details, detailInput } =
    data;
  const [list, setList] = useState({ empList });
  const [entry, setEntry] = useState({
    id,
    job,
    company,
    dateFrom,
    dateTo,
    details,
    detailInput,
  });

  function handleChange(event) {
    setEntry((prevState) => {
      return {
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          text: event.target.value,
        },
      };
    });
  }

  function addDetail() {
    setEntry((prevState) => {
      return {
        ...prevState,
        details: prevState.details.concat({
          id: uniqid(),
          ...entry.detailInput,
        }),
        detailInput: { ...detailInput },
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList({ empList: list.empList.concat(entry) });
    setEntry({
      id: uniqid(),
      details: [],
      ...data,
    });
  }

  return (
    <>
      <h2>Employment</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <Input data={entry.job} onChange={handleChange} />
        <br />
        <Input data={entry.company} onChange={handleChange} />
        <br />
        <Input data={entry.dateFrom} onChange={handleChange} />
        <br />
        <Input data={entry.dateTo} onChange={handleChange} />
        <br />
        <Input data={entry.detailInput} onChange={handleChange} />{" "}
        <button type="button" onClick={addDetail}>
          Add
        </button>
        <br />
        {entry.details.length > 0 &&
          entry.details.map((detail) => {
            return (
              <div key={detail.id}>
                <p>{detail.text}</p>
              </div>
            );
          })}
        <br />
        <button type="submit">Submit</button>
      </form>
      {list.empList.length > 0 &&
        list.empList.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.job.text}</p>
              <p>{element.company.text}</p>
              <p>{element.dateFrom.text}</p>
              <p>{element.dateTo.text}</p>
              {element.details.length > 0 &&
                element.details.map((detail) => {
                  return (
                    <div key={detail.id}>
                      <ul>
                        <li>{detail.text}</li>
                      </ul>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </>
  );
}
