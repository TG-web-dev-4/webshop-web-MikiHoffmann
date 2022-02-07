import { StyledHeader } from "../styles/styledComponents/Header.styled";
import { StyledMainTitle } from "../styles/styledComponents/MainTitle.styled";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <StyledHeader>
      <StyledMainTitle>We sell the universe...</StyledMainTitle>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
