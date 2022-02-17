import { StyledHeader } from "../styles/styledComponents/Header.styled";
import { StyledMainTitle } from "../styles/styledComponents/MainTitle.styled";

const Header = () => {
  return (
    <StyledHeader className="backgroundImg">
      <img src="images/spaceWalkersLogo.png" alt="blanco" />
      <StyledMainTitle className="mainTitle">
        <span><h2>We are spaceWalkers!</h2></span>
        <span>We sell the universe...</span>
      </StyledMainTitle>
    </StyledHeader>
  );
};

export default Header;
