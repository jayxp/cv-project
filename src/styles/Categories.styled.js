import styled from "styled-components";

export const Category = styled.section`
  margin: 0 auto;
  margin-bottom: 2%;

  & > h2 {
    padding-left: 1.25%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 5%;
  }
`;

export const Contact = styled.address`
  align-items: end;
  display: grid;
  grid-template-areas:
    "email name github"
    "phone site linkedin";
  grid-template-columns: fit-content(125px) 1fr fit-content(125px);
  margin: 0 auto;
  width: 95%;

  & > .email {
    grid-area: email;
  }

  & > .name {
    font-weight: bold;
    font-size: 1.5rem;
    grid-area: name;
    text-align: center;
  }

  & > .github {
    grid-area: github;
    text-align: end;
  }

  & > .linkedin {
    grid-area: linkedin;
    text-align: end;
  }

  & > .phone {
    grid-area: phone;
  }

  & > .site {
    grid-area: site;
    text-align: center;
    text-transform: lowercase;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: end;
    display: grid;
    grid-template-areas:
      "email name github"
      "phone site linkedin";
    grid-template-columns: 0.6fr 1fr 0.6fr;
  }
`;

export const Education = styled.article`
  align-items: end;
  display: grid;
  grid-template-areas:
    "location college date"
    "degree degree degree";
  grid-template-columns: 0.35fr 0.7fr 0.35fr;
  margin: 0 auto;
  width: 95%;

  & > .location {
    font-weight: bold;
    grid-area: location;
  }

  & > .college {
    font-weight: bold;
    grid-area: college;
    text-align: center;
  }

  & > .date {
    font-weight: bold;
    grid-area: date;
    text-align: end;
  }

  & > .degree {
    grid-area: degree;
    text-align: center;
  }

  button {
    grid-column-end: span 4;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: end;
    display: grid;
    grid-template-areas:
      "location college date"
      "degree degree degree";
    grid-template-columns: 0.35fr 0.7fr 0.35fr;
  }
`;

export const Employment = styled.article`
  display: grid;
  grid-template-areas:
    "job company date"
    "list . ."
    "button . .";
  grid-template-columns: auto 1fr auto auto;
  margin: 0 auto;
  width: 95%;

  & > .job {
    font-weight: bold;
    grid-area: job;
  }

  & > .company {
    font-weight: bold;
    grid-area: company;
    text-align: center;
  }

  & > .date {
    font-weight: bold;
    grid-area: date;
    text-align: end;
  }

  & > .list {
    grid-area: list;
    grid-column-end: span 4;
  }

  button {
    grid-area: button;
    grid-column-end: span 4;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-areas:
      "job company date"
      "list . ."
      "button . .";
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }
`;

export const Project = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  margin: 0 auto;
  width: 95%;

  & > .title {
    font-weight: bold;
  }

  & > .link {
    font-style: italic;
    line-height: 1;
    text-transform: lowercase;
  }
`;

export const Technical = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
`;
