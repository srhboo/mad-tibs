import React from "react";
import styled from "styled-components";

const RotateWrapper = styled.div`
  position: relative;
  animation: 10000ms rotate infinite normal linear;
  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

export const Rotate = ({ children }) => (
  <RotateWrapper>{children}</RotateWrapper>
);
