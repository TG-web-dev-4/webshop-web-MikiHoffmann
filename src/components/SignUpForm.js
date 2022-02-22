import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/FirebaseConfig";
import { StyledForm } from "../styles/styledComponents/Form.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
const SignUpForm = () => {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [user, setUser] = useState({});
  //console.log(signUpEmail);
  //console.log(signUpPassword);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(user);
  return (
    <>
      {user?.email}
      <StyledForm>
        <legend>
          <h3>Sign Up &#64; spaceWalkers</h3>
        </legend>
        <label htmlFor="firstName">first name</label>
        <input
          type="text"
          id="firstName"
          placeholder="please enter your name..."
        />
        <label htmlFor="eMail">email</label>
        <input
          type="text"
          id="eMail"
          placeholder="please enter your email..."
          onChange={(e) => {
            setSignUpEmail(e.target.value);
          }}
        />
        <label htmlFor="setPassword">password</label>
        <input
          type="password"
          id="setPasswword"
          placeholder="please choose a password..."
          onChange={(e) => {
            e.preventDefault();
            setSignUpPassword(e.target.value);
          }}
        />
        <div className="buttonContainer">
          <StyledLinkButton className="cancelButton">cancel</StyledLinkButton>
          <StyledLinkButton className="confirmButton" onClick={signUp}>
            confirm
          </StyledLinkButton>
        </div>
      </StyledForm>
    </>
  );
};

export default SignUpForm;
