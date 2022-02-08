import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { StyledNavBar } from "../styles/styledComponents/NavBar.styled";

const NavBar = ({ cartItems }) => {
  console.log(cartItems);
  const [showCounter, setShowCounter] = useState(false);
  useEffect(() => {
    if(cartItems.length > 0) {
      setShowCounter(true);
    }
  },[cartItems])
  return (
    <StyledNavBar>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart" className="cartLink">
        <img src="../images/ImageBlancoSquare.png" alt="blanco" />
        {showCounter ?
        <div className="cartCounterContainer">
          <span className="cartCounter">{cartItems.length}</span>
        </div> : null}
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
