import React, { useState } from "react";
import uniqid from "uniqid";
import Input from "./Input";

export default function ProjectCategory(props) {
  const { data } = props;
  const { store, id, pName, link, details, detailInput } = data;
  const [list, setList] = useState({ store });
  const [entry, setEntry] = useState({ id, pName, link, details, detailInput });

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
    setList({ store: list.store.concat(entry) });
    setEntry({
      id: uniqid(),
      ...data,
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

  return (
    <>
      <h2>Projects</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <Input data={entry.pName} onChange={handleChange} />
        <br />
        <Input data={entry.link} onChange={handleChange} />
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
      {list.store.length > 0 &&
        list.store.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.pName.text}</p>
              <p>{element.link.text}</p>
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