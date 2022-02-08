import { StyledHeader } from "../styles/styledComponents/Header.styled";
import { StyledMainTitle } from "../styles/styledComponents/MainTitle.styled";
import NavBar from "./NavBar";

const Header = ({cartItems}) => {
  return (
    <StyledHeader>
      <img src="images/ImageBlancoSquare.png" alt="blanco" />
      <StyledMainTitle>We sell the universe...</StyledMainTitle>
      <NavBar cartItems={cartItems}/>
    </StyledHeader>
  );
};

export default Header;
