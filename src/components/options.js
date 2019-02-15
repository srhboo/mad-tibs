import styled from "styled-components";
import { ButtonResetStyles } from "./button";
import { createTabletAndDesktopMediaQuery } from "../helpers/styles";

export const OptionsWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const BaseOption = styled.button`
  ${ButtonResetStyles};
  padding: 1rem;
  font-size: 2rem;
  flex-basis: 100%;
  ${createTabletAndDesktopMediaQuery} {
    flex-basis: 33%;
  }
`;
