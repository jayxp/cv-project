import React, { useState } from "react";
import uniqid from "uniqid";
import Input from "./Input";

export default function EducationCategory(props) {
  const { data } = props;
  const { store, id, location, college, dateFrom, dateTo, degree } = data;
  const [list, setList] = useState({ store });
  const [entry, setEntry] = useState({
    id,
    location,
    college,
    dateFrom,
    dateTo,
    degree,
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
    setList({ store: list.store.concat(entry) });
    setEntry({
      id: uniqid(),
      ...data,
    });
  };

  const deleteEntry = (prop) => {
    const newList = [...list.store];

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
      <h2>Education</h2>
      <hr />
      <form onSubmit={handleSubmitExt}>
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
      {list.store.length > 0 &&
        list.store.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.location.text}</p>
              <p>{element.college.text}</p>
              <p>{element.dateFrom.text}</p>
              <p>{element.dateTo.text}</p>
              <p>{element.degree.text}</p>
            </div>
          );
        })}
    </>
  );
}
