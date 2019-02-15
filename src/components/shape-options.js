import React from "react";
import styled, { css } from "styled-components";
import { OptionsWrapper, BaseOption } from "./options";

const BasePreviewStyles = css`
  width: 8rem;
  height: 8rem;
  background-color: yellow;
`;
const CirclePreviewStyles = css`
  ${BasePreviewStyles};
  border-radius: 50%;
`;
const SquarePreviewStyles = css`
  ${BasePreviewStyles}
`;

const ShapeOption = styled(BaseOption)`
  position: relative;
  &:hover::after,
  &:focus::after,
  &:active::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    z-index: -1;
    ${({ option }) => option === "circle" && CirclePreviewStyles}
    ${({ option }) => option === "square" && SquarePreviewStyles};
  }
`;

export const ShapeOptions = ({ options, onClickHandler }) => (
  <OptionsWrapper>
    {options.map(option => (
      <ShapeOption
        key={option}
        bgColor={option}
        option={option}
        onClick={() => onClickHandler(option)}
      >
        {option}
      </ShapeOption>
    ))}
  </OptionsWrapper>
);
