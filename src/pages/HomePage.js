import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../services/FirebaseConfig";
import { query, collection, getDocs, where } from "firebase/firestore";

import { StyledArticle } from "../components/styledComponents/Article.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
const HomePage = () => {
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (error) {
      console.error(error);
      setError("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <StyledArticle>
        <div>
          <h2>Welcome to spaceWalkers...</h2>
          <p>The best way to make your own universe!</p>
        </div>
        <div>Loged In as: {name}</div>
        <div>{user?.email}{error}</div>
        <div>
          <StyledLinkButton onClick={logout}>LogOut</StyledLinkButton>
        </div>
      </StyledArticle>
    </>
  );
};

export default HomePage;
