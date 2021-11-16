import React from "react";

export default function PreviewDetails(props) {
  const { entry, deleteDetail } = props;

  return (
    <ul>
      {entry.details.length > 0 &&
        entry.details.map((detail) => (
          <li key={detail.id}>
            {detail.text}{" "}
            <button type="button" onClick={() => deleteDetail(detail)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
