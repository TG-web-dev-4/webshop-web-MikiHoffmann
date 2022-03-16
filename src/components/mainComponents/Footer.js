import { StyledArticle } from "../styledComponents/Article.styled";
import { FooterSection } from "../styledComponents/FooterSection";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <StyledArticle>
        <FooterSection>
          <p className="footerTitle">
            <strong>spaceWalkers</strong> is a makebelieve coorporation by Miki!
          </p>
          <p className="footerBottom">
            this website is designed and build by 
            <Link to={{pathname: "https://www.miki101.nl"}} target="_blank"> MIKI</Link>
          </p>
        </FooterSection>
      </StyledArticle>
    </>
  );
};

export default Footer;
