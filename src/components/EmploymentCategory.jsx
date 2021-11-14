import React, { useState } from "react";
import uniqid from "uniqid";
import Input from "./Input";

export default function EmploymentCategory(props) {
  const { data } = props;
  const { id, job, company, dateFrom, dateTo, details, detailInput } = data;
  const [list, setList] = useState([]);
  const [entry, setEntry] = useState({
    id,
    job,
    company,
    dateFrom,
    dateTo,
    details,
    detailInput,
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

  const handleSubmitExt = (event) => {
    event.preventDefault();
    setList(list.concat(entry));
    setEntry({
      ...data,
      id: uniqid(),
    });
  };

  const addDetail = () => {
    setEntry((prevState) => {
      return {
        ...prevState,
        details: prevState.details.concat({
          ...entry.detailInput,
          id: uniqid(),
        }),
        detailInput: { ...detailInput },
      };
    });
  };

  const deleteDetail = (prop) => {
    const newList = [...entry.details];

    newList.splice(
      newList.findIndex((element) => element.id === prop.id),
      1
    );

    setEntry({
      ...entry,
      details: [...newList],
    });
  };

  const deleteEntry = (prop) => {
    const newList = [...list];

    newList.splice(
      newList.findIndex((element) => element.id === prop.id),
      1
    );

    setList({
      store: [...newList],
    });
  };

  return (
    <>
      <h2>Employment</h2>
      <hr />
      <form onSubmit={handleSubmitExt}>
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
        <ul>
          {entry.details.length > 0 &&
            entry.details.map((detail) => {
              return (
                <li key={detail.id}>
                  {detail.text}{" "}
                  <button type="button" onClick={() => deleteDetail(detail)}>
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
        <br />
        <button type="submit">Submit</button>
      </form>
      {list.length > 0 &&
        list.map((element) => {
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
              <button type="button" onClick={() => deleteEntry(element)}>
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}
