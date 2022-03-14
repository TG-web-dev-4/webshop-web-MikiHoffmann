import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/FirebaseConfig";
import { useAuth } from "../../contexts/AuthContext";
import { StyledNavBar } from "../styledComponents/NavBar.styled";

const NavBar = () => {
  const currentUser = useAuth();
  console.log(currentUser);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("You have signed out");
        navigate("/");
      })
      .catch((err) => {
        setError(err);
        console.log(error.message);
      });
  };
  const cartItems = useSelector((state) => state.shop.cartItems);
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
    <>
      <StyledNavBar className="backgroundImg">
        <Link to="/">
          <img
            className="linkIcon"
            src="images/bckgrndLogo/spaceWalkersLogo.png"
            alt="spaceWalkers logo"
          />
        </Link>
        {currentUser.currentUser && <Link to="/">
        <img
            className="linkIcon"
            src="images/icons/iconPerson.png"
            alt="person icon"
            onClick={logout}
          />
        </Link>
          
        }
        
        <Link to="/home">
          <img
            className="linkIcon"
            src="images/icons/iconHome.png"
            alt="home icon"
          />
        </Link>
        <Link to="/products">
          <img
            className="linkIcon"
            src="images/icons/iconMenu.png"
            alt="menu icon"
          />
        </Link>
        
        <Link to="/cart">
          <img
            className="linkIcon"
            src="images/icons/iconShop.png"
            alt="shop icon"
          />
          {showCounter ? (
            <div className="cartCounterContainer">
              <span className="cartCounter">{cartItems.length}</span>
            </div>
          ) : null}
        </Link>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
