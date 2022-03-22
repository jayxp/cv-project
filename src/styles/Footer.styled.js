import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #e0e0e0;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  a {
    display: contents;
    color: black;
    font-weight: bold;
    text-decoration: none;
  }

  p {
    font-size: 10px;
  }

  span {
    display: flex;
    padding-top: 10px;
    margin: 0 auto;
    justify-content: center;
    padding-bottom: 5px;
    width: 25%;
    gap: 5px;
  }

  span > .child {
    margin-right: 5px;
  }

  svg {
    align-self: center;
    font-size: 35px;
  }
`;

export default StyledFooter;
