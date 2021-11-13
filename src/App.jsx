import React from "react";
import HeaderCategory from "./components/HeaderCategory";
import EducationCategory from "./components/EducationCategory";
import EmploymentCategory from "./components/EmploymentCategory";
import ProjectCategory from "./components/ProjectCategory";
import TechnicalCategory from "./components/TechnicalCategory";
import {
  headerData,
  educationData,
  employmentData,
  projectData,
  technicalData,
} from "./data/index";

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
