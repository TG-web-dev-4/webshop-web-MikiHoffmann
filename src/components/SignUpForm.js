import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../services/FirebaseConfig";
import { useAuth } from "../contexts/AuthContext";
import { StyledForm } from "../components/styledComponents/Form.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";

const SignUpForm = () => {
  
  const currentUser = useAuth()
  console.log(currentUser)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  //console.log(signUpEmail);
  //console.log(signUpPassword);
  //const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        console.log("user created:", credentials.user);
      })
      .catch((err) => {
        setError(err);
        console.log(error.message);
      });
  };
  return (
    <>
      <StyledForm>
        <legend>
          <h3>Sign Up &#64; spaceWalkers</h3>
        </legend>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="please enter your name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="eMail">email</label>
        <input
          type="text"
          id="eMail"
          value={email}
          placeholder="please enter your email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="setPassword">password</label>
        <input
          type="password"
          id="setPasswword"
          value={password}
          placeholder="please choose a password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {error.message}
        <div className="buttonContainer">
          <StyledLinkButton className="confirmButton" onClick={signUp}>
            Sign Up
          </StyledLinkButton>
        </div>
        <div className="buttonContainer">
          <StyledLinkButton
            className="confirmButton"
            onClick={signInWithGoogle}
          >
            Sign Up with Google
          </StyledLinkButton>
        </div>
        <div className="buttonContainer">
          Already an exclusive spaceWalker?
          <StyledLinkButton>
            <Link to="/">Sign In</Link>
          </StyledLinkButton>
        </div>
      </StyledForm>
    </>
  );
};

export default SignUpForm;
