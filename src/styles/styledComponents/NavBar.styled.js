import styled from "styled-components";

export const StyledNavBar = styled.nav`
  height: 2em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0.5em 0;
  .pageLink {
    position: relative;
    height: 1.5em;
    
    img {
      height: 100%;
      margin: 0;
    }
    .cartCounterContainer {
      position: absolute;
      top: -0.5em;
      right: -0.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1em;
      width: 1em;
      background-color: blue;
      border-radius: 50%;
      .cartCounter {
        font-size: 0.6em;
        color: white;
      }
    }
  }
  .linkWord {
      display: none;
      @media only screen and (min-width: 31.25em) {
        display: inline-block;
      }
    }
    .linkIcon {
      display: block;
      @media only screen and (min-width: 31.25em) {
        display: none;
      }
    }
`;
