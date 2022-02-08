import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
top: 0;
width: 100%;
display: grid;
grid-template-rows: repeat(3, auto);
grid-template-columns: repeat(10, 1fr);
background-color: ${({theme}) => theme.colors.bgClr};
box-shadow: 2px 2px 4px rgb(0,0,0);
z-index: 1200;
img {
    grid-area: 1/1/3/3;
    height: 3em;
    margin: 1em 0 0 1em;
}
div:nth-of-type(1) {
    grid-area: 1/3/2/11;
}
nav {
    grid-area: 3/1/4/11;
}
`