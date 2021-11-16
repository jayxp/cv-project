import React from "react";

export default function EducationList(props) {
  const { list, deleteEntry } = props;

  return (
    list.length > 0 &&
    list.map((entry) => {
      return (
        <div key={entry.id}>
          <p>{entry.location.text}</p>
          <p>{entry.college.text}</p>
          <p>{entry.dateFrom.text}</p>
          <p>{entry.dateTo.text}</p>
          <p>{entry.degree.text}</p>
          <button type="button" onClick={() => deleteEntry(entry)}>
            Delete
          </button>
        </div>
      );
    })
  );
}
