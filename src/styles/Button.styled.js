import styled from "styled-components";

/* Remember width variable is temporary, create a layout variable */

const StyledButton = styled.button`
  background-color: ${({ color }) => color || "#595959"};
  border: none;
  border-radius: ${({ radius }) => radius || "0px"};
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: ${({ top }) => top || "10px"};
  width: ${({ size }) => size || "100%"};

  &:active {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default StyledButton;
