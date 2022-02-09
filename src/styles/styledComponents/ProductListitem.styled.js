import styled from "styled-components";

export const StyledProductListitem = styled.li`
display: grid;
grid-template-rows: auto repeat(4, 1fr);
grid-template-columns: repeat(10, 1fr);
grid-gap: .5em;
width: 100%;
margin-top: .5em;
padding: .2em;
box-shadow: 2px 2px 4px rgb(0,0,0);
img {
    grid-area: 1/1/2/11;
    box-shadow: 2px 2px 4px rgb(0,0,0);
}
.itemTitle {
    grid-area: 2/1/3/11;
}
.itemPrice {
    grid-area: 3/10/4/11;
}
.itemDescription {
    grid-area: 4/1/5/11
}
.addButton {
    grid-area: 5/1/6/11;
    width: 100%;
    height: 2em;
    cursor: pointer;
}
`