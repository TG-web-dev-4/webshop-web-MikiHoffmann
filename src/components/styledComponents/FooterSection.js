import styled from "styled-components";

export const FooterSection = styled.div`
position: relative;
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-gap: 0.5em;
.footerTitle {
    grid-area: 1/1/2/11;
    width: 100%;
    text-align: center;
}
.footerBottom {
        grid-area: 4/1/5/11;
        width: 100%;
        font-size: .7em;
        text-align: center;
    }
`