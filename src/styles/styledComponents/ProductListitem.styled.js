import styled from "styled-components";

export const StyledProductListitem = styled.li`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: repeat(10, 1fr);
grid-gap: .5em;
width: 100%;
margin-top: .5em;
img {
    grid-area: 1/1/4/4;
    box-shadow: 2px 2px 4px rgb(0,0,0);
}
.itemTitle {
    grid-area: 1/4/4/11;
}
.itemDescription {
    grid-area: 2/4/4/11
}
button {
    grid-area: 3/10/4/11;
    cursor: pointer;
}
`