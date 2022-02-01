import { Link } from "react-router-dom";
import { StyledNavBar } from "../styles/styledComponents/NavBar.styled";

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to="/">Home</Link>

      <Link to="/products">Products</Link>

      <Link to="/cart">shopping cart</Link>
    </StyledNavBar>
  );
};

export default NavBar;
