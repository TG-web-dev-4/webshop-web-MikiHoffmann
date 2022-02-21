import { StyledForm } from "../styles/styledComponents/Form.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
const SignUpForm = () => {
  return (
    <>
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
        />
        <label htmlFor="confirmeMail">email</label>
        <input
          type="text"
          id="confirmeMail"
          placeholder="please confirm your email..."
        />
        <label htmlFor="setPassword">password</label>
        <input
          type="password"
          id="setPasswword"
          placeholder="please choose a password..."
        />
        <label htmlFor="confirmPassword">password</label>
        <input
          type="password"
          id="confirmPasswword"
          placeholder="please confirm password..."
        />
        <div className="buttonContainer">
          <StyledLinkButton className="cancelButton">cancel</StyledLinkButton>
          <StyledLinkButton className="confirmButton">confirm</StyledLinkButton>
        </div>
      </StyledForm>
    </>
  );
};

export default SignUpForm;
