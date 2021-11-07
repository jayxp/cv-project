import React, { useState } from "react";

const userData = {
  email: {
    text: "",
    name: "email",
    type: "email",
    description: "Email Address",
    example: "mail@example.com",
  },
  phone: {
    text: "",
    name: "phone",
    type: "tel",
    description: "Phone Number",
    example: "(999) 999-9999",
  },
  name: {
    text: "",
    name: "name",
    type: "text",
    description: "Full Name",
    example: "John Doe",
  },
  website: {
    text: "",
    name: "website",
    type: "text",
    description: "Personal Website",
    example: "example.com",
  },
  github: {
    text: "",
    name: "github",
    type: "text",
    description: "Github Handle",
    example: "jayxp",
  },
};

const Input = (props) => {
  const { text, name, type, description, example } = props.data;

  const handleChange = (e) => props.onChange(e);

  return (
    <>
      <label htmlFor={text}>{description}</label>
      <br />
      <input
        value={text}
        name={name}
        type={type}
        placeholder={example}
        onChange={handleChange}
      />
    </>
  );
};

function HeaderCategoryRow(props) {
  const [listing, setListing] = useState({ ...props });

  function handleChange(event) {
    setListing((prevState) => {
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
    setListing({ edit: false });
  }

  /* Current form can likely be extracted into its own component */

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input data={listing.email} onChange={handleChange} />
        <br />
        <Input data={listing.phone} onChange={handleChange} />
        <br />
        <Input data={listing.name} onChange={handleChange} />
        <br />
        <Input data={listing.website} onChange={handleChange} />
        <br />
        <Input data={listing.github} onChange={handleChange} />
      </form>
    </>
  );
}

function EducationCategoryRow() {
  const [listing, setListing] = useState({
    location: "City, State",
    college: "University",
    date: "From -- To",
    degree: "Degree",
    gpa: "GPA",
  });

  return (
    <div>
      <h2>Education</h2>
      <hr />
      <p>{listing.location}</p>
      <p>{listing.college}</p>
      <p>{listing.date}</p>
      <p>{listing.degree}</p>
      <p>{listing.gpa}</p>
    </div>
  );
}

function EmploymentCategoryRow() {
  const [listing, setListing] = useState({
    job: "Position",
    company: "Company Name",
    date: "From -- To",
    tasks: [],
  });

  return (
    <div>
      <h2>Employment</h2>
      <hr />
      <p>{listing.job}</p>
      <p>{listing.company}</p>
      <p>{listing.date}</p>
    </div>
  );
}

function ProjectCategoryRow() {
  const [listing, setListing] = useState({
    name: "Project Name",
    link: "Project Link",
    details: [],
  });

  return (
    <div>
      <h2>Projects</h2>
      <hr />
      <p>{listing.name}</p>
      <p>{listing.link}</p>
    </div>
  );
}

function TechnicalCategoryRow() {
  const [listing, setListing] = useState({
    langs: [],
    framelibs: [],
    tools: [],
  });

  return (
    <div>
      <h2>Technical Skills</h2>
      <hr />
      <p>Languages:</p>
      <p>Frameworks and Libraries:</p>
      <p>Tools:</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <HeaderCategoryRow {...userData} />
      <EducationCategoryRow />
      <EmploymentCategoryRow />
      <ProjectCategoryRow />
      <TechnicalCategoryRow />
    </div>
  );
}
