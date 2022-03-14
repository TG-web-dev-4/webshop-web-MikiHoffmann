import { StyledHeader } from "../styledComponents/Header.styled";
import { StyledMainTitle } from "../styledComponents/MainTitle.styled";

import { useAuth } from "../../contexts/AuthContext";
const Header = () => {
  const currentUser = useAuth();
  return (
    <StyledHeader className="backgroundImg">
      <img src="images/bckgrndLogo/spaceWalkersLogo.png" alt="blanco" />
      <StyledMainTitle className="mainTitle">
        <span>
          <h2>We are spaceWalkers!</h2>
        </span>
        {currentUser.currentUser ? (
          <span>Welcome {currentUser.currentUser.email} !</span>
        ) : (
          <span>We sell the universe...</span>
        )}
      </StyledMainTitle>
    </StyledHeader>
  );
};

export default Header;
