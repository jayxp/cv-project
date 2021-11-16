import React from "react";

export default function HeaderList(props) {
  const { list } = props;

  return (
    list.display === true && (
      <>
        <p>{list.email.text}</p>
        <p>{list.phone.text}</p>
        <p>{list.name.text}</p>
        <p>{list.website.text}</p>
        <p>{list.github.text}</p>
      </>
    )
  );
}
