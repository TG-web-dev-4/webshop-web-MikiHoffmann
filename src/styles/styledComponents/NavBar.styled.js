import styled from "styled-components";

export const StyledNavBar = styled.nav`
  position: fixed;
  bottom: 1em;
  height: 3em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-top: 0.1em solid rgb(0, 0, 0);
  border-bottom: 0.1em solid rgb(0, 0, 0);
  box-shadow: -2px -2px 4px rgb(0, 0, 0), 2px 2px 4px rgb(0, 0, 0);
  .pageLink {
    position: relative;
    height: 70%;
    img {
      height: 100%;
      width: auto;
    }
    .cartCounterContainer {
      position: absolute;
      top: 0.25em;
      right: 0.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1em;
      width: 1em;
      background-color: transparent;
      border-radius: 50%;
      z-index: 1;
      .cartCounter {
        font-size: 0.6em;
        font-weight: bold;
      color: rgb(0,0,0);
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
