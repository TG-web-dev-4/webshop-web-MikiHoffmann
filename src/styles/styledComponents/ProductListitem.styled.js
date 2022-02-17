import styled from "styled-components";

export const StyledProductListItem = styled.li`
  display: grid;
  grid-template-rows: repeat(10, auto);
  grid-template-columns: repeat(10, 1fr);
  grid-gap: .2em;
  width: 100%;
  margin: 1em 0;
  padding: 0.2em;
  border-top: 2px solid white;
  .itemTitle {
    grid-area: 1/1/2/11;
  }
  .itemImgContainer {
    grid-area: 2/1/10/11;
    height: auto;
    width: 100%;
    overflow: hidden;
  }
  .itemImg {
    height: auto;
    width: 100%;
    box-shadow: 2px 2px 4px rgb(0, 0, 0);
  }
  .itemPrice {
    grid-area: 2/7/3/11;
    text-align: right;
  }
  .itemDescription {
    grid-area: 4/1/5/11;
  }
  .detailsButton {
    grid-area: 10/1/11/6;
    cursor: pointer;
  }
  .addButton {
    grid-area: 10/6/11/11;
    cursor: pointer;
  }
`;
