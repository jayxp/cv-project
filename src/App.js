import React, { useState } from "react";
import uniqid from "uniqid";

const CATEGORIES = [
  { type: "Header" },
  { type: "Education" },
  { type: "Employment" },
  { type: "Projects" },
  { type: "Technical Skills" },
];

function Resume({ categories }) {
  function ResumeCategoryRow({ category }) {
    function renderSections() {
      if (category.type === "Header") {
        return (
          <div>
            <ResumeRow type={category.type} />
          </div>
        );
      } else {
        return (
          <div>
            <h3>{category.type}</h3>
            <hr />
            <ResumeRow type={category.type} />
          </div>
        );
      }
    }

    function ResumeRow({ type }) {
      /*

      Listings should manage state as the only container of changing elements.

      */

      function renderListing() {
        if (type === "Header") {
          return (
            <div>
              <p>mail@something.com</p>
              <p>(999)999-9999</p>
              <p>First Last</p>
              <p>personalwebsite.com</p>
              <p>Github: handle</p>
            </div>
          );
        }

        if (type === "Education") {
          return (
            <div>
              <p>City, State</p>
              <p>University</p>
              <p>From -- To</p>
              <p>Degree</p>
              <p>GPA</p>
            </div>
          );
        }

        if (type === "Employment") {
          return (
            <div>
              <p>Position</p>
              <p>Company Name</p>
              <p>From -- To</p>
              <ul>
                <li>Responsibilities</li>
              </ul>
            </div>
          );
        }

        if (type === "Projects") {
          return (
            <div>
              <p>Project Name</p>
              <p>Project Link</p>
              <ul>
                <li>Details</li>
              </ul>
            </div>
          );
        }

        if (type === "Technical Skills") {
          return (
            <div>
              <p>Languages: </p>
              <p>Frameworks and Libraries: </p>
              <p>Tools: </p>
            </div>
          );
        }
      }

      return renderListing();
    }

    return renderSections();
  }

  return categories.map((category) => {
    return <ResumeCategoryRow key={uniqid()} category={category} />;
  });
}

export default function App() {
  return <Resume categories={CATEGORIES} />;
}
