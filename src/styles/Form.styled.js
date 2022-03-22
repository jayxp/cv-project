import styled from "styled-components";

const StyledForm = styled.form`
  background-color: #e0e0e0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > label {
      align-self: normal;
      line-height: 1.75;
      padding-left: 5%;
    }

    & > input {
      width: 90%;
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export default StyledForm;
