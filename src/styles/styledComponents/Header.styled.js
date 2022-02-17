import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 1em;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.3em;
  padding: 1em;
  border-top: .1em solid rgb(0,0,0);
  border-bottom: .1em solid rgb(0,0,0);
  box-shadow: -2px -2px 4px rgb(0, 0, 0), 2px 2px 4px rgb(0, 0, 0);
  z-index: 1200;
  img {
    display: block;
    grid-area: 1/4/2/8;
    height: 2em;
    margin: auto;
  }
  .mainTitle {
    grid-area: 2/1/4/11;
  }
  @media only screen and (min-width: 31.25em) {
    grid-template-rows: repeat(2, auto);
    .mainTitle {
      grid-area: 2/1/3/11;
    }
  }
`;
