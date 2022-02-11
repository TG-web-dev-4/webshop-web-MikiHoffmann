import { StyledHeader } from "../styles/styledComponents/Header.styled";
import { StyledMainTitle } from "../styles/styledComponents/MainTitle.styled";
import NavBar from "./NavBar";

const Header = ({cartItems}) => {
  return (
    <StyledHeader>
      <img src="images/spaceWalkersLogo.png" alt="blanco" />
      <StyledMainTitle className="mainTitle">We are spaceWalkers! We sell the universe...</StyledMainTitle>
      <NavBar cartItems={cartItems}/>
    </StyledHeader>
  );
};

export default Header;
