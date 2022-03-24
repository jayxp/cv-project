import uniqid from "uniqid";

const contactData = {
  email: {
    text: "firstlast@mail.com",
    name: "email",
    type: "email",
    description: "Email Address",
    example: "mail@example.com",
  },
  phone: {
    text: "1234567890",
    name: "phone",
    type: "tel",
    description: "Phone Number",
    example: "(999) 999-9999",
  },
  name: {
    text: "First Last",
    name: "name",
    type: "text",
    description: "Full Name",
    example: "John Doe",
  },
  website: {
    text: "https://example.com",
    name: "website",
    type: "url",
    description: "Personal Website",
    example: "https://example.com",
  },
  github: {
    text: "example",
    name: "github",
    type: "text",
    description: "GitHub Handle",
    example: "username",
  },
  linkedin: {
    text: "Example",
    name: "linkedin",
    type: "text",
    description: "LinkedIn Handle",
    example: "username",
  },
};

const educationData = {
  id: uniqid(),
  location: {
    text: "City, State",
    name: "location",
    type: "text",
    description: "Location",
    example: "City, State",
  },
  college: {
    text: "University of Example",
    name: "college",
    type: "text",
    description: "College",
    example: "University of X",
  },
  dateFrom: {
    text: "2014-08",
    name: "dateFrom",
    type: "month",
    description: "Date From",
    example: "2014-08",
  },
  dateTo: {
    text: "2018-05",
    name: "dateTo",
    type: "month",
    description: "Date To",
    example: "2018-05",
  },
  degree: {
    text: "BS in Example Systems",
    name: "degree",
    type: "text",
    description: "Degree Program",
    example: "BS in X",
  },
};

const employmentData = {
  id: uniqid(),
  job: {
    text: "Example Analyst",
    name: "job",
    type: "text",
    description: "Position",
    example: "Software Developer",
  },
  company: {
    text: "Example Inc.",
    name: "company",
    type: "text",
    description: "Company Name",
    example: "Google",
  },
  dateFrom: {
    text: "2018-06",
    name: "dateFrom",
    type: "month",
    description: "Date From",
    example: "2018-06",
  },
  dateTo: {
    text: "2020-08",
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
  id: uniqid(),
  pName: {
    text: "Example Project",
    name: "pName",
    type: "text",
    description: "Project Name",
    example: "Example Project",
  },
  link: {
    text: "https://github.com/example/example-project",
    name: "link",
    type: "url",
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
    text: "HTML, CSS, JavaScript, SQL, Python",
    name: "languages",
    type: "text",
    description: "Languages",
    example: "HTML, CSS, JavaScript, SQL, Python",
  },
  frameLibs: {
    text: "React, React-Native, Node.js",
    name: "frameLibs",
    type: "text",
    description: "Frameworks & Libraries",
    example: "React, React-Native, Node.js",
  },
  tools: {
    text: "Git, Linux, Webpack, NPM, Jira",
    name: "tools",
    type: "text",
    description: "Tools",
    example: "Git, Linux, Webpack, NPM, Jira",
  },
};

export {
  contactData,
  educationData,
  employmentData,
  projectData,
  technicalData,
};
