import React from "react";
import StyledButton from "../styles/Button.styled";
import { Employment } from "../styles/Categories.styled";
import convertDate from "../utils/convertDate";

export default function EmploymentList({ list, deleteEntry }) {
  return (
    list.length > 0 &&
    list.map((entry) => {
      const { id, job, company, dateFrom, dateTo, details } = entry;
      return (
        <Employment key={id}>
          <p className="job">{job.text}</p>
          <p className="company">{company.text}</p>
          <p className="date">
            {convertDate(dateFrom.text)} {" - "}
            {convertDate(dateTo.text)}
          </p>
          <ul className="list">
            {details.length > 0 &&
              details.map((detail) => <li key={detail.id}>{detail.text}</li>)}
          </ul>
          <StyledButton
            color="red"
            type="button"
            onClick={() => deleteEntry(entry)}
          >
            Delete
          </StyledButton>
        </Employment>
      );
    })
  );
}

/*
import React from "react";
import StyledButton from "../styles/Button.styled";
import { Employment } from "../styles/Categories.styled";
import convertDate from "../utils/convertDate";

export default function EmploymentList(props) {
  const { list, deleteEntry } = props;

  return (
    list.length > 0 &&
    list.map((entry) => {
      return (
        <Employment key={entry.id}>
          <p className="job">{entry.job.text}</p>
          <p className="company">{entry.company.text}</p>
          <p className="date">
            {convertDate(entry.dateFrom.text)} {" - "}
            {entry.dateTo.text === "Present"
              ? "Present"
              : convertDate(entry.dateTo.text)}
          </p>
          <ul className="list">
            {entry.details.length > 0 &&
              entry.details.map((detail) => (
                <li key={detail.id}>{detail.text}</li>
              ))}
          </ul>
          <StyledButton
            color="red"
            type="button"
            onClick={() => deleteEntry(entry)}
          >
            Delete
          </StyledButton>
        </Employment>
      );
    })
  );
}
*/
