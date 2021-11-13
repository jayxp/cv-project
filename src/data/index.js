import uniqid from "uniqid";

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
  store: [],
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
  store: [],
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
  store: [],
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
    description: "Languages",
    example: "HTML, CSS, JavaScript, SQL, Python",
  },
  frameLibs: {
    text: "",
    name: "frameLibs",
    type: "text",
    description: "Frameworks & Libraries",
    example: "React, React-Native, Node.js, Express.js",
  },
  tools: {
    text: "",
    name: "tools",
    type: "text",
    description: "Tools",
    example: "Git, Linux, Webpack, NPM, Jira",
  },
};

export {
  headerData,
  educationData,
  employmentData,
  projectData,
  technicalData,
};
