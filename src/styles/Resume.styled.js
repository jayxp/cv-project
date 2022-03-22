import styled from "styled-components";

const StyledResume = styled.main`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto;
    width: 80%;
    border: none;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 35%) 0px 6px 25px;
    margin-bottom: 1rem;
  }
`;

export default StyledResume;
