import styled from "styled-components";

export const Circle = styled.div`
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
`;

Circle.defaultProps = {
  size: 10,
  bgColor: "red"
};
