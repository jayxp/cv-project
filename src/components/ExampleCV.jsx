import React from "react";
import StyledButton from "../styles/Button.styled";

function ContactExample({ entry }) {
  const { email, phone, name, website, github, linkedin } = entry;
  email.text = "firstlast@mail.com";
  phone.text = "1234567890";
  name.text = "First Last";
  website.text = "https://example.com";
  github.text = "example";
  linkedin.text = "Example";
}

function EducationExample({ entry }) {
  const { location, college, dateFrom, dateTo, degree } = entry;
  location.text = "City, State";
  college.text = "University of Example";
  dateFrom.text = "2014-08";
  dateTo.text = "2018-05";
  degree.text = "BS in Example Systems";
}

function EmploymentExample({ entry }) {
  const { job, company, dateFrom, dateTo } = entry;
  job.text = "Example Analyst";
  company.text = "Example Inc.";
  dateFrom.text = "2018-06";
  dateTo.text = "2020-08";
}

function ProjectExample({ entry }) {
  const { pName, link } = entry;
  pName.text = "Example Project";
  link.text = "https://github.com/example/example-project";
}

function TechnicalExample({ entry }) {
  const { languages, frameLibs, tools } = entry;
  languages.text = "HTML, CSS, JavaScript, SQL, Python";
  frameLibs.text = "React, React-Native, Node.js";
  tools.text = "Git, Linux, Webpack, NPM, Jira";
}

function LoadExample({ contact, education, employment, project, technical }) {
  ContactExample(contact);
  EducationExample(education);
  EmploymentExample(employment);
  ProjectExample(project);
  TechnicalExample(technical);
}

export default function ExampleCV({
  contact,
  education,
  employment,
  project,
  technical,
}) {
  const data = { contact, education, employment, project, technical };

  return (
    <StyledButton onClick={() => LoadExample(data)} color="#de8a0d" top="0px">
      Load Example
    </StyledButton>
  );
}
