import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";
import { StyledArticle } from "../components/styledComponents/Article.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const currentUser = useAuth();
  console.log(currentUser);
  const products = useSelector((state) => state.shop.products);
  console.log(products);
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  console.log(randomProduct);

  return (
    <>
      <StyledArticle>
        {currentUser.currentUser ? (
          <div>Welcome {currentUser.currentUser.email}</div>
        ) : (
          <div>
            <div>
              <h2>Welcome to spaceWalkers...</h2>
              <p>The best way to make your own universe!</p>
            </div>
            Want to be a spaceWalker? Join our exclusive club NOW!
            <div className="buttonContainer">
              <Link to="/signUp">
                <StyledLinkButton>Join Us Now!</StyledLinkButton>
              </Link>
            </div>
            <div>
              <h3>To jumpstart your Universe, why not start with...</h3>
              <ProductCard product={randomProduct} />
              <p>
                or just{" "}
                <Link to="/products">
                  <StyledLinkButton>browse our webshop</StyledLinkButton>
                </Link>{" "}
                !
              </p>
            </div>
          </div>
        )}
      </StyledArticle>
    </>
  );
};

export default HomePage;
