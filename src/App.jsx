import React, { useState, useRef, useEffect } from "react";
import uniqid from "uniqid";

/* 
============ TO DO ============
[x] Add submit handler to remaining components
[] Add deletion logic for appropriate components
[] Add edit logic to all components
[] Create sub-list logic for appropriate components
[] Make the app cute

============ REMINDER ============
- May need to add edit attribute to datastores
- Possibly do something with fragmented returns
- Think of a better variable name than list, confusing when accessing array indices
- disable eslint prop validation & function binding rules
- Reactstrap or Styled Components? Research
- May need to add a parent component to contain category components for PDF export
*/

const headerData = {
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
    example: "username",
  },
};

const educationData = {
  eduList: [],
  id: uniqid(),
  location: {
    text: "",
    name: "location",
    type: "text",
    description: "Location",
    example: "City, State",
  },
  college: {
    text: "",
    name: "college",
    type: "text",
    description: "College",
    example: "University of X",
  },
  dateFrom: {
    text: "",
    name: "dateFrom",
    type: "month",
    description: "Date From",
    example: "2014-08",
  },
  dateTo: {
    text: "",
    name: "dateTo",
    type: "month",
    description: "Date To",
    example: "2018-05",
  },
  degree: {
    text: "",
    name: "degree",
    type: "text",
    description: "Degree Program",
    example: "BS in X",
  },
};

const employmentData = {
  empList: [],
  id: uniqid(),
  job: {
    text: "",
    name: "job",
    type: "text",
    description: "Position",
    example: "Software Developer",
  },
  company: {
    text: "",
    name: "company",
    type: "text",
    description: "Company Name",
    example: "Google",
  },
  dateFrom: {
    text: "",
    name: "dateFrom",
    type: "month",
    description: "Date From",
    example: "2018-06",
  },
  dateTo: {
    text: "",
    name: "dateTo",
    type: "month",
    description: "Date To",
    example: "2020-08",
  },
  details: [],
  detailInput: {
    text: "",
    name: "detailInput",
    type: "text",
    description: "Details",
    example: "Regular standups, sprints, ...",
  },
};

const projectData = {
  projectList: [],
  id: uniqid(),
  pName: {
    text: "",
    name: "pName",
    type: "text",
    description: "Project Name",
    example: "Example Project",
  },
  link: {
    text: "",
    name: "link",
    type: "text",
    description: "Project URL",
    example: "https://github.com/user/link",
  },
  details: [],
  detailInput: {
    text: "",
    name: "detailInput",
    type: "text",
    description: "Details",
    example: "XYZ",
  },
};

const technicalData = {
  languages: {
    text: "",
    name: "languages",
    type: "text",
    description: "",
    example: "HTML, CSS, JavaScript, SQL, Python",
  },
  frameLibs: {
    text: "",
    name: "frameLibs",
    type: "text",
    description: "",
    example: "React, React-Native, Node.js, Express.js",
  },
  tools: {
    text: "",
    name: "tools",
    type: "text",
    description: "",
    example: "Git, Linux, Webpack, NPM, Jira",
  },
};

const Input = (props) => {
  const { data } = props;
  const { text, name, type, description, example } = data;
  const handleChange = (event) => props.onChange(event);

  return (
    <>
      {description !== "" && (
        <>
          <label htmlFor={text}>{description}</label>
          <br />
        </>
      )}
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

function HeaderCategory(props) {
  const { data } = props;
  const { email, phone, name, website, github } = data;
  const [entry, setEntry] = useState({
    email,
    phone,
    name,
    website,
    github,
  });

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
    setEntry({ edit: false });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input data={entry.email} onChange={handleChange} />
        <br />
        <Input data={entry.phone} onChange={handleChange} />
        <br />
        <Input data={entry.name} onChange={handleChange} />
        <br />
        <Input data={entry.website} onChange={handleChange} />
        <br />
        <Input data={entry.github} onChange={handleChange} />
      </form>
    </>
  );
}

function EducationCategory(props) {
  const { data } = props;
  const { eduList, id, location, college, dateFrom, dateTo, degree } = data;
  const [list, setList] = useState({ eduList });
  const [entry, setEntry] = useState({
    id,
    location,
    college,
    dateFrom,
    dateTo,
    degree,
  });
  const initial = useRef({
    location,
    college,
    dateFrom,
    dateTo,
    degree,
  });

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
    setList({ eduList: list.eduList.concat(entry) });
    setEntry({
      id: uniqid(),
      ...initial.current,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Education</h2>
        <hr />
        <Input data={entry.location} onChange={handleChange} />
        <br />
        <Input data={entry.college} onChange={handleChange} />
        <br />
        <Input data={entry.dateFrom} onChange={handleChange} />
        <br />
        <Input data={entry.dateTo} onChange={handleChange} />
        <br />
        <Input data={entry.degree} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
      {list.eduList.length > 0 &&
        list.eduList.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.location.text}</p>
              <p>{e.college.text}</p>
              <p>{e.dateFrom.text}</p>
              <p>{e.dateTo.text}</p>
              <p>{e.degree.text}</p>
            </div>
          );
        })}
    </>
  );
}

function EmploymentCategory(props) {
  const { data } = props;
  const { empList, id, job, company, dateFrom, dateTo, details, detailInput } =
    data;
  const [list, setList] = useState({ empList });
  const [entry, setEntry] = useState({
    id,
    job,
    company,
    dateFrom,
    dateTo,
    details,
    detailInput,
  });
  const initial = useRef({
    job,
    company,
    dateFrom,
    dateTo,
    details,
    detailInput,
  });

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

  function handleSubmit(event) {
    event.preventDefault();
    setList({ empList: list.empList.concat(entry) });
    setEntry({
      id: uniqid(),
      ...initial.current,
      details: [],
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Employment</h2>
        <hr />
        <Input data={entry.job} onChange={handleChange} />
        <br />
        <Input data={entry.company} onChange={handleChange} />
        <br />
        <Input data={entry.dateFrom} onChange={handleChange} />
        <br />
        <Input data={entry.dateTo} onChange={handleChange} />
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
      {list.empList.length > 0 &&
        list.empList.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.job.text}</p>
              <p>{e.company.text}</p>
              <p>{e.dateFrom.text}</p>
              <p>{e.dateTo.text}</p>
            </div>
          );
        })}
    </>
  );
}

function ProjectCategory(props) {
  const { data } = props;
  const { projectList, id, pName, link, details, detailInput } = data;
  const [list, setList] = useState({ projectList });
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

  /* REWRITE THIS */
  function handleSubmit(event) {
    event.preventDefault();
    setList({ projectList: list.projectList.concat(entry) });
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
      {list.projectList.length > 0 &&
        list.projectList.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.pName.text}</p>
              <p>{e.link.text}</p>
            </div>
          );
        })}
    </>
  );
}

function TechnicalCategory(props) {
  const { data } = props;
  const { languages, frameLibs, tools } = data;
  const [entry, setEntry] = useState({ languages, frameLibs, tools });

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
    setEntry({});
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Technical Skills</h2>
      <hr />
      <p>
        Languages: <Input data={entry.languages} onChange={handleChange} />
      </p>
      <p>
        Frameworks and Libraries:{" "}
        <Input data={entry.frameLibs} onChange={handleChange} />
      </p>
      <p>
        Tools: <Input data={entry.tools} onChange={handleChange} />
      </p>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <HeaderCategory data={headerData} />
      <EducationCategory data={educationData} />
      <EmploymentCategory data={employmentData} />
      <ProjectCategory data={projectData} />
      <TechnicalCategory data={technicalData} />
    </div>
  );
}
