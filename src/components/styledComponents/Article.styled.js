import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  padding: 1.5em;
  @media only screen and (orientation: landscape) {
    padding-right: 5em;
  }
  .buttonContainer {
    width: 100%;
    padding: 2em 0;
    button {
      width: 100%;
    }
  }
`;
