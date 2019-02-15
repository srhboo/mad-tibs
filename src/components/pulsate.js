import React from "react";
import styled from "styled-components";

const PulsateWrapper = styled.div`
  animation: 8000ms pulsate infinite alternate ease-in-out;
  @keyframes pulsate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Pulsate = ({ children }) => (
  <PulsateWrapper>{children}</PulsateWrapper>
);
