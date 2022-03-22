import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import Header from "./components/Header";
import ContactCategory from "./components/ContactCategory";
import EducationCategory from "./components/EducationCategory";
import EmploymentCategory from "./components/EmploymentCategory";
import ProjectCategory from "./components/ProjectCategory";
import TechnicalCategory from "./components/TechnicalCategory";
import Footer from "./components/Footer";
import {
  contactData,
  educationData,
  employmentData,
  projectData,
  technicalData,
} from "./data/index";
import StyledResume from "./styles/Resume.styled";

// Still not doing anything with this
const theme = {
  mobile: "768px",
  tablet: "1024px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledResume>
        <ContactCategory data={contactData} />
        <EducationCategory data={educationData} />
        <EmploymentCategory data={employmentData} />
        <ProjectCategory data={projectData} />
        <TechnicalCategory data={technicalData} />
      </StyledResume>
      <Footer />
    </ThemeProvider>
  );
}
