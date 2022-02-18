import { StyledForm } from "../styles/styledComponents/Form.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";

const SignInForm = () => {
  return (
    <StyledForm id="signInForm">
      <legend>
        <h3>Sign In &#64; spaceWalkers</h3>
      </legend>
      <label for="userName">username</label>
      <input
        type="text"
        id="userName"
        placeholder="please enter your username..."
      />
      <label for="setPassword">password</label>
      <input
        type="password"
        id="setPasswword"
        placeholder="please enter your password..."
      />
      <div className="buttonContainer">
        <StyledLinkButton className="cancelButton">cancel</StyledLinkButton>
        <StyledLinkButton className="confirmButton">confirm</StyledLinkButton>
      </div>
    </StyledForm>
  );
};

export default SignInForm;
