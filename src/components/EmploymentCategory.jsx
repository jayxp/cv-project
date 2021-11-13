import React, { useState, useRef } from "react";
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
  const initial = useRef({
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

  function addTask() {
    setEntry((prevState) => {
      return {
        ...prevState,
        details: prevState.details.concat({
          id: uniqid(),
          ...entry.detailInput,
        }),
        detailInput: { ...initial.current.detailInput },
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList({ empList: list.empList.concat(entry) });
    setEntry({
      id: uniqid(),
      ...initial.current,
      details: [],
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Employment</h2>
        <hr />
        <Input data={entry.job} onChange={handleChange} />
        <br />
        <Input data={entry.company} onChange={handleChange} />
        <br />
        <Input data={entry.dateFrom} onChange={handleChange} />
        <br />
        <Input data={entry.dateTo} onChange={handleChange} />
        <br />
        <Input data={entry.detailInput} onChange={handleChange} />{" "}
        <button type="button" onClick={addTask}>
          Add
        </button>
        <br />
        {entry.details.length > 0 &&
          entry.details.map((e) => {
            return (
              <div key={e.id}>
                <p>{e.text}</p>
              </div>
            );
          })}
        <br />
        <button type="submit">Submit</button>
      </form>
      {list.empList.length > 0 &&
        list.empList.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.job.text}</p>
              <p>{e.company.text}</p>
              <p>{e.dateFrom.text}</p>
              <p>{e.dateTo.text}</p>
              {e.details.length > 0 &&
                e.details.map((test) => {
                  return (
                    <div key={test.id}>
                      <ul>
                        <li>{test.text}</li>
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
