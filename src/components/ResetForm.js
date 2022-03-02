import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../services/FirebaseConfig";
import { StyledForm } from "./styledComponents/Form.styled";
import { StyledLinkButton } from "./styledComponents/LinkButton.styled";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [loading, user]);

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
      <div className="buttonContainer">
        <StyledLinkButton
          className="confirmButton"
          onClick={() => sendPasswordReset(email)}
        >
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
