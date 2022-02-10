import styled from "styled-components";

export const StyledCartListItem = styled.li`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.5em;
  width: 100%;
  margin-top: 0.5em;
  img {
    grid-area: 1/1/4/4;
    box-shadow: 2px 2px 4px rgb(0, 0, 0);
  }
  .itemTitle {
    grid-area: 1/4/4/11;
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
  .deleteButton {
    grid-area: 3/8/4/9;
    cursor: pointer;
  }
`;
