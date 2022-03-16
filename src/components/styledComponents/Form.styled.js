import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30em;
  margin: 0 auto;
  padding: 1.3em;
  background-color: ${({ theme }) => theme.colors.bgClr};
  box-shadow: ${({ theme }) => theme.colors.boxShdwRght};
  label {
    margin-top: 1em;
  }
  input {
    margin-top: 0.5em;
    padding: 0.2em;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.clr};
    outline: none;
    border: none;
    border-left: 0.05em solid rgb(255, 255, 255);
    border-bottom: 0.05em solid rgb(255, 255, 255);
    ::placeholder {
      color: ${({ theme }) => theme.colors.clr};
    }
  }
  .buttonContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5em;
    padding-top: 1.5em;
    text-align: center;
    .confirmButton {
      grid-column: 1;
    }
  }
`;
