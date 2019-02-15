import styled from "styled-components";

export const Square = styled.div`
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  background-color: ${({ bgColor }) => bgColor};
`;

Square.defaultProps = {
  size: 10,
  bgColor: "green"
};
