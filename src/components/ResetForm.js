import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";
import { StyledForm } from "./styledComponents/Form.styled";
import { StyledLinkButton } from "./styledComponents/LinkButton.styled";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const passwordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("A reset email has been send");
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <StyledForm>
      <legend>
        <h3>Reset your spaceWalkers password</h3>
      </legend>
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
      {error.message}{message}
      <div className="buttonContainer">
        <StyledLinkButton className="confirmButton" onClick={passwordReset}>
          Send me a reset email.
        </StyledLinkButton>
      </div>
      <div className="buttonContainer">
        Not an exclusive spaceWalker yet?
        <StyledLinkButton>
          <Link to="/signup">Sign Up now</Link>
        </StyledLinkButton>
      </div>
    </StyledForm>
  );
};

export default ResetForm;
