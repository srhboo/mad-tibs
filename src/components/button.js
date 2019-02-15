import styled, { css } from "styled-components";

export const ButtonResetStyles = css`
  appearance: none;
  background: transparent;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 0;

  &[disabled] {
    pointer-events: none;
  }

  &:focus,
  &:active,
  &:focus:active,
  &:focus:hover {
    outline: 0;
  }
`;

export const SmileyFaceButton = styled.button`
  ${ButtonResetStyles};
  padding: 0.5rem;
  color: black;
  font-size: 3rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  &:hover {
    background-color: yellow;
  }
`;
