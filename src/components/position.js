import React from "react";
import styled from "styled-components";
import { createTabletAndDesktopMediaQuery } from "../helpers/styles";

const PositionWrapper = styled.div`
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  ${({ mobileTop, top }) => (mobileTop || top) && `top: ${mobileTop || top}%`};
  ${({ mobileLeft, left }) =>
    (mobileLeft || left) && `left: ${mobileLeft || left}%`};
  ${({ mobileRight, right }) =>
    (mobileRight || right) && `right: ${mobileRight || right}%`};
  ${createTabletAndDesktopMediaQuery} {
    ${({ right }) => right && `right: ${right}%`};
    top: ${({ top }) => top}%;
    ${({ left }) => left && `left: ${left}%`};
  }
`;

export const Position = ({
  children,
  top,
  mobileTop,
  left,
  mobileLeft,
  right,
  mobileRight,
  zIndex,
  position = "absolute"
}) => (
  <PositionWrapper
    top={top}
    mobileTop={mobileTop}
    left={left}
    mobileLeft={mobileLeft}
    right={right}
    mobileRight={mobileRight}
    zIndex={zIndex}
    position={position}
  >
    {children}
  </PositionWrapper>
);
