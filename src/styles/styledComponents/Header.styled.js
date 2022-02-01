import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: repeat(10, 1fr);
div:nth-of-type(1) {
    grid-area: 1/1/2/11;
}
nav {
    grid-area: 3/1/11/11;
}
`