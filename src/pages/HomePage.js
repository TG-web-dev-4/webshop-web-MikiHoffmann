/*
import { useAuthState } from "react-firebase-hooks/auth";

import { query, collection, getDocs, where } from "firebase/firestore";
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { StyledArticle } from "../components/styledComponents/Article.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
const HomePage = () => {
  
const currentUser = useAuth()
console.log(currentUser)
const navigate = useNavigate();
  const [error, setError] = useState("");
  const logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("You have signed out");
        navigate('/')
      })
      .catch((err) => {
        setError(err);
        console.log(error.message);
      });
  };

  return (
    <>
      <StyledArticle>
        <div>
          <h2>Welcome to spaceWalkers...</h2>
          <p>The best way to make your own universe!</p>
        </div>
        
        <div>You loged In with {currentUser.currentUser?.email}</div>
        <div></div>
        <div>
          <StyledLinkButton onClick={logout}>LogOut</StyledLinkButton>
        </div>
      </StyledArticle>
    </>
  );
};

export default HomePage;
