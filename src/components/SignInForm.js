import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";
import { StyledForm } from "../styles/styledComponents/Form.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";

const SignInForm = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  //console.log(signInEmail);
  //console.log(signInPassword);
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {user?.email}
      <StyledForm id="signInForm">
        <legend>
          <h3>Sign In &#64; spaceWalkers</h3>
        </legend>
        <label htmlFor="userName">username</label>
        <input
          type="text"
          id="userName"
          placeholder="please enter your username..."
          onChange={(e) => setSignInEmail(e.target.value)}
        />
        <label htmlFor="signInPassword">password</label>
        <input
          type="password"
          id="signInPassword"
          placeholder="please enter your password..."
          onChange={(e) => setSignInPassword(e.target.value)}
        />
        <div className="buttonContainer">
          <StyledLinkButton className="cancelButton">cancel</StyledLinkButton>
          <StyledLinkButton className="confirmButton" onClick={signIn}>
            confirm
          </StyledLinkButton>
        </div>
      </StyledForm>
    </>
  );
};

export default SignInForm;
