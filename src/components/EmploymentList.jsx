import React from "react";

export default function EmploymentList(props) {
  const { list, deleteEntry } = props;

  return (
    list.length > 0 &&
    list.map((entry) => {
      return (
        <div key={entry.id}>
          <p>{entry.job.text}</p>
          <p>{entry.company.text}</p>
          <p>{entry.dateFrom.text}</p>
          <p>{entry.dateTo.text}</p>
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
