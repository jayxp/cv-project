import React, { useState, useRef } from "react";
import uniqid from "uniqid";
import Input from "./Input";

export default function EducationCategory(props) {
  const { data } = props;
  const { eduList, id, location, college, dateFrom, dateTo, degree } = data;
  const [list, setList] = useState({ eduList });
  const [entry, setEntry] = useState({
    id,
    location,
    college,
    dateFrom,
    dateTo,
    degree,
  });
  const initial = useRef({
    location,
    college,
    dateFrom,
    dateTo,
    degree,
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

  function handleSubmit(event) {
    event.preventDefault();
    setList({ eduList: list.eduList.concat(entry) });
    setEntry({
      id: uniqid(),
      ...initial.current,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Education</h2>
        <hr />
        <Input data={entry.location} onChange={handleChange} />
        <br />
        <Input data={entry.college} onChange={handleChange} />
        <br />
        <Input data={entry.dateFrom} onChange={handleChange} />
        <br />
        <Input data={entry.dateTo} onChange={handleChange} />
        <br />
        <Input data={entry.degree} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
      {list.eduList.length > 0 &&
        list.eduList.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.location.text}</p>
              <p>{e.college.text}</p>
              <p>{e.dateFrom.text}</p>
              <p>{e.dateTo.text}</p>
              <p>{e.degree.text}</p>
            </div>
          );
        })}
    </>
  );
}
