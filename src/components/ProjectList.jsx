import React from "react";

export default function ProjectList(props) {
  const { list, deleteEntry } = props;

  return (
    list.length > 0 &&
    list.map((entry) => {
      return (
        <div key={entry.id}>
          <p>{entry.pName.text}</p>
          <p>{entry.link.text}</p>
          <ul>
            {entry.details.length > 0 &&
              entry.details.map((detail) => (
                <li key={detail.id}>{detail.text}</li>
              ))}
          </ul>
          <button type="button" onClick={() => deleteEntry(entry)}>
            Delete
          </button>
        </div>
      );
    })
  );
}
