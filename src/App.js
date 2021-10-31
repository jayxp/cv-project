import React from "react";
import uniqid from "uniqid";

const CATEGORIES = [
  { type: "Header" },
  { type: "Education" },
  { type: "Employment" },
  { type: "Projects" },
  { type: "Technical Skills" },
];

function Resume({ categories }) {
  function Section({ category }) {
    function Listings({ type }) {
      return (
        <div>
          <h4>Stuff here</h4>
        </div>
      );
    }

    return (
      <div>
        <h2>{category.type}</h2>
        <hr />
        <Listings type={category.type} />
      </div>
    );
  }

  return categories.map((category) => {
    return <Section key={uniqid()} category={category} />;
  });
}

export default function App() {
  return <Resume categories={CATEGORIES} />;
}

/* 

Sections are the parent of Listings
1. 5 section types: Header, Education, Employment,
Projects, & Technical Skills
2. Function for deleting listings needs to be defined in Section
and passed to child Listings


*/
