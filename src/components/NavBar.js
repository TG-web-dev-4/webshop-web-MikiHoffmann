import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { StyledNavBar } from "../styles/styledComponents/NavBar.styled";

const NavBar = ({ cartItems }) => {
  //console.log("cart:", cartItems);
  const [showCounter, setShowCounter] = useState(false);
  useEffect(() => {
    if (cartItems.length > 0) {
      setShowCounter(true);
    }
    if (cartItems.length === 0) {
      setShowCounter(false);
    }
  }, [cartItems]);
  return (
    <StyledNavBar>
      <Link to="/" className="pageLink">
        <img
          className="linkIcon"
          src="../images/iconHome.png"
          alt="home icon"
        />
      </Link>
      <Link to="/products" className="pageLink">
        Products
      </Link>
      <Link to="/cart" className="pageLink">
        <img
          className="linkIcon"
          src="../images/iconShop.png"
          alt="shop icon"
        />
        {showCounter ? (
          <div className="cartCounterContainer">
            <span className="cartCounter">{cartItems.length}</span>
          </div>
        ) : null}
      </Link>
    </StyledNavBar>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.shop.cartItems,
  };
};

export default connect(mapStateToProps)(NavBar);
