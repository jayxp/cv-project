import React from "react";
import StyledButton from "../styles/Button.styled";
import { Education } from "../styles/Categories.styled";
import convertDate from "../utils/convertDate";

export default function EducationList({ list, deleteEntry }) {
  return (
    list.length > 0 &&
    list.map((entry) => {
      const { id, location, college, dateFrom, dateTo, degree } = entry;
      return (
        <Education key={id}>
          <p className="location">{location.text}</p>
          <p className="college">{college.text}</p>
          <p className="date">
            {convertDate(dateFrom.text)}
            {" - "}
            {convertDate(dateTo.text)}
          </p>
          <p className="degree">{degree.text}</p>
          <StyledButton
            color="red"
            type="button"
            onClick={() => deleteEntry(entry)}
          >
            Delete
          </StyledButton>
        </Education>
      );
    })
  );
}

/*
import React from "react";
import StyledButton from "../styles/Button.styled";
import { Education } from "../styles/Categories.styled";
import convertDate from "../utils/convertDate";

export default function EducationList(props) {
  const { list, deleteEntry } = props;

  return (
    list.length > 0 &&
    list.map((entry) => {
      return (
        <Education key={entry.id}>
          <p className="location">{entry.location.text}</p>
          <p className="college">{entry.college.text}</p>
          <p className="date">
            {convertDate(entry.dateFrom.text)}
            {" - "}
            {convertDate(entry.dateTo.text)}
          </p>
          <p className="degree">{entry.degree.text}</p>
          <StyledButton
            color="red"
            type="button"
            onClick={() => deleteEntry(entry)}
          >
            Delete
          </StyledButton>
        </Education>
      );
    })
  );
}
*/
