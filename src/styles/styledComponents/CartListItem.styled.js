import styled from "styled-components";

export const StyledCartListItem = styled.li`
  display: grid;
  grid-template-rows: repeat(3, 2em);
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.5em;
  width: 100%;
  margin-top: 1em;
  border-top: 2px solid green;
  img {
    grid-area: 1/1/4/5;
    height: 100%;
    box-shadow: ${({theme}) => theme.colors.boxShdwRght};
  }
  .itemTitle {
    grid-area: 1/5/2/11;
  }
  .itemPrice {
    grid-area: 1/10/2/11;
  }
  .itemDescription {
    grid-area: 2/4/4/11;
  }
  .decreaseButton {
    grid-area: 3/5/4/6;
    background-color: red;
    color: white;
    cursor: pointer;
  }
  .increaseButton {
    grid-area: 3/6/4/7;
    background-color: green;
    color: white;
    cursor: pointer;
  }
  .adjustSelector {
    grid-area: 3/5/4/10;
  }
  .deleteButton {
    grid-area: 3/9/4/11;
    border-radius: 50%;
    cursor: pointer;
    img {
      height: 100%;
    }
    &:hover {
      background-color: red;
    }
  }
`;
