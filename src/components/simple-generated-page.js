import React from "react";
import styled from "styled-components";
import { Square } from "./square";
import { Pulsate } from "./pulsate";
import { Position } from "./position";
import { Circle } from "./circle";
import { Rotate } from "./rotate";

const ViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 5rem;
`;

const ReflectedHeadline = styled(Headline)`
  transform: rotateY(180deg);
  right: 8rem;
  left: initial;
`;

const shapeMap = {
  circle: Circle,
  square: Square
};

export const SimpleGeneratedPage = ({ headline, backgroundColor, shape }) => {
  const ShapeComponent = shapeMap[shape];
  return (
    <ViewWrapper bgColor={backgroundColor}>
      <Headline>{headline}</Headline>
      <ReflectedHeadline>{headline}</ReflectedHeadline>
      <Position top={40} left={40}>
        <Pulsate>
          <Rotate>
            <Headline>{headline}</Headline>
          </Rotate>
        </Pulsate>
      </Position>
      <Position top={10} left={10}>
        <Pulsate>
          <ShapeComponent size={10} />
        </Pulsate>
      </Position>
    </ViewWrapper>
  );
};
