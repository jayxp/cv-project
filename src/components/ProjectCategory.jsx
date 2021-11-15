import React from "react";
import Input from "./Input";
import useHelper from "../utils/helpers";

export default function ProjectCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  return (
    <>
      <h2>Projects</h2>
      <hr />
      <form onSubmit={userData.handleSubmitExt}>
        <Input data={userData.entry.pName} onChange={userData.handleChange} />
        <br />
        <Input data={userData.entry.link} onChange={userData.handleChange} />
        <br />
        <Input
          data={userData.entry.detailInput}
          onChange={userData.handleChange}
        />{" "}
        <button type="button" onClick={userData.addDetail}>
          Add
        </button>
        <br />
        <ul>
          {userData.entry.details.length > 0 &&
            userData.entry.details.map((detail) => (
              <li key={detail.id}>
                {detail.text}{" "}
                <button
                  type="button"
                  onClick={() => userData.deleteDetail(detail)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
        <br />
        <button type="submit">Submit</button>
      </form>
      {userData.list.length > 0 &&
        userData.list.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.pName.text}</p>
              <p>{element.link.text}</p>
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
