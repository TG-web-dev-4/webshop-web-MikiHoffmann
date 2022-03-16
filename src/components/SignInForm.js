import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../services/FirebaseConfig";
import { StyledForm } from "./styledComponents/Form.styled";
import { StyledLinkButton } from "./styledComponents/LinkButton.styled";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //console.log(email);
  //console.log(password);
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        console.log("You signed In:", credentials.user);
        navigate('/home');
      })
      .catch((err) => {
        setError(err);
        console.log(error.message);
      });
  };
  return (
    <>
      <StyledForm id="signInForm">
        <legend>
          <h3>Sign In &#64; spaceWalkers</h3>
        </legend>
        <label htmlFor="userName">username</label>
        <input
          type="text"
          id="userName"
          value={email}
          placeholder="please enter your username..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="signInPassword">password</label>
        <input
          type="password"
          id="signInPassword"
          value={password}
          placeholder="please enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttonContainer">
          <StyledLinkButton className="confirmButton" onClick={signIn}>
            Sign In
          </StyledLinkButton>
        </div>

        <div className="buttonContainer">
          <StyledLinkButton onClick={signInWithGoogle}>
            Login with Google
          </StyledLinkButton>
        </div>
        <div className="buttonContainer">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div className="buttonContainer">
          Not an exclusive spaceWalker yet?
          <StyledLinkButton>
            <Link to="/signup">Sign Up now</Link>
          </StyledLinkButton>
        </div>
      </StyledForm>
    </>
  );
};

export default SignInForm;
