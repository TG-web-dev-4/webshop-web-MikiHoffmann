import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 2em);
  grid-template-columns: repeat(10, 1fr);
  background-color: ${({ theme }) => theme.colors.bgClr};
  background-image: url("../images/nebula.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 4px rgb(0, 0, 0);
  z-index: 1200;
  img {
    grid-area: 1/1/3/3;
    height: 2em;
    margin: 1em 0 0 1em;
  }
  .mainTitle {
    grid-area: 3/1/4/11;
  }
  nav {
    grid-area: 1/3/3/11;
    align-self: flex-end;
  }
`;
