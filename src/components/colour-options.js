import React from "react";
import styled from "styled-components";
import { OptionsWrapper, BaseOption } from "./options";

const ColourOption = styled(BaseOption)`
  &:hover,
  &:focus,
  &:active {
    background-color: ${({ bgColor }) => bgColor};
  }
`;

export const ColourOptions = ({ options, onClickHandler }) => (
  <OptionsWrapper>
    {options.map(option => (
      <ColourOption
        key={option}
        bgColor={option}
        onClick={() => onClickHandler(option)}
      >
        {option}
      </ColourOption>
    ))}
  </OptionsWrapper>
);
