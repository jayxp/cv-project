import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import StyledFooter from "../styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <span>
        <a
          title="Github Profile"
          target="_blank"
          href="https://github.com/jayxp"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
        <a title="Send Email" href="mailto:pattenjaym@gmail.com">
          <MdEmail />
        </a>
      </span>
      <p>
        Made with ♥ by{" "}
        <a
          target="_blank"
          href="https://github.com/jayxp"
          rel="noreferrer noopener"
        >
          Jayxp
        </a>
      </p>
    </StyledFooter>
  );
}
