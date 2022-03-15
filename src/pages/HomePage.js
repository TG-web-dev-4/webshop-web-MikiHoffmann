/*
import { useAuthState } from "react-firebase-hooks/auth";

import { query, collection, getDocs, where } from "firebase/firestore";
*/
import React from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";
import { StyledArticle } from "../components/styledComponents/Article.styled";
//import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const currentUser = useAuth();
  console.log(currentUser);
  const products = useSelector((state) => state.shop.products);

  return (
    <>
      <StyledArticle>
        <div>
          <h2>Welcome to spaceWalkers...</h2>
          <p>The best way to make your own universe!</p>
        </div>
        {currentUser.currentUser ? (
          <div>You loged In with {currentUser.currentUser.email}</div>
        ) : (
          <div>Want to be a spaceWalker?</div>
        )}

        <div>
          <ProductCard products={products}/>
        </div>
      </StyledArticle>
    </>
  );
};

export default HomePage;
