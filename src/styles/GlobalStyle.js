import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    height: 100%;
}
body {
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgClr};
    
    color: ${({ theme }) => theme.colors.Clr};
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1em;
    overflow-x: hidden;
}
.root {
    height: 100%;
}
.backgroundImg {
    background-image: url('../images/nebulaPortrait.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: 150%;
    background-repeat: no-repeat;
    animation-name: zoomInOut;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
@media only screen and (orientation: landscape) {
    .backgroundImg {
        background-image: url('../images/nebula.jpg');
    }
}
@media only screen and (min-width: 35em) and (orientation: landscape) {
    .backgroundImg {
    background-image: url('../images/nebula.jpg');
    background-size: 100%;
    }
    @keyframes zoomInOut {
    0% {
        background-size: 100%;
    }
    50% {
        background-size: 275%;
    }
    100% {
        background-size: 100%;
    }
}
}
@keyframes zoomInOut {
    0% {
        background-size: 150%;
    }
    50% {
        background-size: 275%;
    }
    100% {
        background-size: 150%;
    }
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
