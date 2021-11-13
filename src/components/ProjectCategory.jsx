import React, { useState, useRef } from "react";
import uniqid from "uniqid";
import Input from "./Input";

export default function ProjectCategory(props) {
  const { data } = props;
  const { proList, id, pName, link, details, detailInput } = data;
  const [list, setList] = useState({ proList });
  const [entry, setEntry] = useState({ id, pName, link, details, detailInput });
  const initial = useRef({ pName, link, details, detailInput });

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
    setList({ proList: list.proList.concat(entry) });
    setEntry({
      id: uniqid(),
      ...initial.current,
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Projects</h2>
        <hr />
        <Input data={entry.pName} onChange={handleChange} />
        <br />
        <Input data={entry.link} onChange={handleChange} />
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
      {list.proList.length > 0 &&
        list.proList.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.pName.text}</p>
              <p>{e.link.text}</p>
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
