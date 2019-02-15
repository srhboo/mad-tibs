import React from "react";
import styled from "styled-components";
import { Square } from "./square";
import { Pulsate } from "./pulsate";
import { Position } from "./position";
import { Circle } from "./circle";
import { Rotate } from "./rotate";
import { UnsplashImage } from "./unsplash-image";

const ViewWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow-x: hidden;
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
`;

const Headline = styled.h1`
  font-size: 6rem;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 2;
  color: ${({ color }) => (color ? color : "white")};
`;

const Topic = styled.h1`
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 2;
`;

const ReflectedTopic = styled(Topic)`
  transform: rotateY(180deg);
`;

const ImageWrapper = styled.div`
  padding-top: 14rem;
`;

const shapeMap = {
  circle: Circle,
  square: Square
};

export const SimpleGeneratedPage = ({
  headline,
  backgroundColor,
  shape,
  topic
}) => {
  const ShapeComponent = shapeMap[shape];
  return (
    <ViewWrapper bgColor={backgroundColor}>
      <Position top={15} mobileTop={5} left={20} mobileLeft={25} zIndex={1}>
        <Topic>{topic}</Topic>
      </Position>
      <Position top={15} mobileTop={15} right={20} mobileRight={25} zIndex={1}>
        <ReflectedTopic>{topic}</ReflectedTopic>
      </Position>
      <Position top={50} left={20} zIndex={2}>
        <Pulsate>
          <Rotate>
            <Headline>{headline}</Headline>
          </Rotate>
        </Pulsate>
      </Position>
      <Position top={51} left={21} zIndex={1}>
        <Pulsate>
          <Rotate>
            <Headline color="black">{headline}</Headline>
          </Rotate>
        </Pulsate>
      </Position>
      <Position top={10} left={10}>
        <Pulsate>
          <ShapeComponent size={10} />
        </Pulsate>
      </Position>
      <Position top={60} left={15} position="relative">
        <ImageWrapper>
          <UnsplashImage searchTerm={headline} />
        </ImageWrapper>
      </Position>
    </ViewWrapper>
  );
};
