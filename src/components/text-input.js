import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  background-color: transparent;
  padding: 0.5rem 0;
  display: block;
  border: none;
  border-bottom: 3px solid black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  color: black;
  margin: 0;
  line-height: 1;

  &:focus {
    outline: none;
  }
`;
