import { StyledHeader } from "../styles/styledComponents/Header.styled";
import { StyledMainTitle } from "../styles/styledComponents/MainTitle.styled";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <StyledHeader>
      <StyledMainTitle>We sell words for every occasion...</StyledMainTitle>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
