import React from "react";
import styled from "styled-components";

const PositionWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
`;

export const Position = ({ children, top, left }) => (
  <PositionWrapper top={top} left={left}>
    {children}
  </PositionWrapper>
);
