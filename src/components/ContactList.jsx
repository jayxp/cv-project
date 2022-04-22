import React from "react";
import { Contact } from "../styles/Categories.styled";

export default function HeaderList({ list }) {
  return (
    list.length > 0 &&
    list.map((entry) => {
      const { id, email, phone, name, website, github, linkedin } = entry;
      return (
        <Contact key={id}>
          <p className="email">{email.text}</p>
          <p className="phone">{phone.text}</p>
          <p className="name">{name.text}</p>
          <p className="site">{website.text}</p>
          <p className="github">GitHub: {github.text}</p>
          <p className="linkedin">LinkedIn: {linkedin.text}</p>
        </Contact>
      );
    })
  );
}

/*
import React from "react";
import { Contact } from "../styles/Categories.styled";

export default function HeaderList(props) {
  const { list } = props;

  return (
    list.display === true && (
      <Contact>
        <p className="email">{list.email.text}</p>
        <p className="phone">{list.phone.text}</p>
        <p className="name">{list.name.text}</p>
        <p className="site">{list.website.text}</p>
        <p className="github">GitHub: {list.github.text}</p>
        <p className="linkedin">LinkedIn: {list.linkedin.text}</p>
      </Contact>
    )
  );
}
*/
