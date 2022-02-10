import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    height: 100%;
    scroll-behavior: smooth;
}
body {
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgClr};
    color: ${({ theme }) => theme.colors.Clr};
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.1em;
    overflow-x: hidden;
}
a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Clr};
}
img {
    height: auto;
    max-width: 100%;
}
li {
    list-style-type: none;
}
`;

export default GlobalStyle;
