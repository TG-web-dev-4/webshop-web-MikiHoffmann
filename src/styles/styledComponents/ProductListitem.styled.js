import styled from "styled-components";

export const StyledProductListItem = styled.li`
  display: grid;
  grid-template-rows: repeat(10, 2em);
  grid-template-columns: repeat(11, 1fr);
  grid-gap: .2em;
  width: 100%;
  margin: 1em 0;
  padding: 0.2em;
  border-top: 2px solid green;
  img {
    grid-area: 3/1/11/11;
    height: 100%;
    border: 2px solid rgb(0,0,0);
    box-shadow: 2px 2px 4px rgb(0, 0, 0);
  }
  .itemTitle {
    grid-area: 1/1/2/11;
  }
  .itemPrice {
    grid-area: 2/7/3/11;
    text-align: right;
  }
  .itemDescription {
    grid-area: 4/1/5/11;
  }
  .detailsButton {
    grid-area: 6/8/8/11;
  }
  .addButton {
    grid-area: 11/1/12/11;
    align-self: flex-end;
    width: 100%;
    height: 2em;
    cursor: pointer;
  }
`;
