import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import Header from "./components/Header";
import ContactCategory from "./components/ContactCategory";
import EducationCategory from "./components/EducationCategory";
import EmploymentCategory from "./components/EmploymentCategory";
import ProjectCategory from "./components/ProjectCategory";
import TechnicalCategory from "./components/TechnicalCategory";
import BasicDocument from "./components/RenderPDF";
import Footer from "./components/Footer";
import {
  contactData,
  educationData,
  employmentData,
  projectData,
  technicalData,
} from "./data/userData";
import StyledResume from "./styles/Resume.styled";
import useHelper from "./utils/useHelper";

const theme = {
  mobile: "768px",
  tablet: "1024px",
};

export default function App() {
  /* Re-renders constantly, feels extremely inefficient.
     Has to be a better way to do this than multiple state declarations.
  */
  const contactState = useHelper({ ...contactData });
  const educationState = useHelper({ ...educationData });
  const employmentState = useHelper({ ...employmentData });
  const projectState = useHelper({ ...projectData });
  const technicalState = useHelper({ ...technicalData });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledResume>
        <ContactCategory data={contactState} />
        <EducationCategory data={educationState} />
        <EmploymentCategory data={employmentState} />
        <ProjectCategory data={projectState} />
        <TechnicalCategory data={technicalState} />
        <BasicDocument
          contact={contactState.entry}
          education={educationState.list}
          employment={employmentState.list}
          project={projectState.list}
          technical={technicalState.entry}
        />
      </StyledResume>
      <Footer />
    </ThemeProvider>
  );
}
