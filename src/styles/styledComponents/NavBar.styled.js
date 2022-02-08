import styled from 'styled-components';

export const StyledNavBar = styled.nav`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin: .5em 0;
.cartLink {
    position: relative;
    height: 1.5em;
    img {
        height: 100%;
        margin: 0;
    }
    .cartCounterContainer {
        position: absolute;
        top: -.5em;
        right: -.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1em;
        width: 1em;
        background-color: blue;
        border-radius: 50%;
        .cartCounter {
        font-size: .6em;
        }
    }
}
`