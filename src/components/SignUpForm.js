import { StyledForm } from "../styles/styledComponents/Form.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
const SignUpForm = () => {
  return (
    <>
      <StyledForm>
        <legend>
          <h3>Sign Up &#64; spaceWalkers</h3>
        </legend>
        <label for="firstName">first name</label>
        <input
          type="text"
          id="firstName"
          placeholder="please enter your name..."
        />
        <label for="firstName">last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="please enter your lastname..."
        />
        <label for="street">address</label>
        <input
          type="text"
          id="street"
          placeholder="please enter your street..."
        />
        <label for="zipCode">zip code</label>
        <input
          type="text"
          id="zipCode"
          placeholder="please enter your zip code..."
        />
        <label for="city">city</label>
        <input type="text" id="city" placeholder="please enter your city..." />
        <label for="eMail">email</label>
        <input
          type="text"
          id="eMail"
          placeholder="please enter your email..."
        />
        <label for="confirmeMail">email</label>
        <input
          type="text"
          id="confirmeMail"
          placeholder="please confirm your email..."
        />
        <label for="setPassword">password</label>
        <input
          type="password"
          id="setPasswword"
          placeholder="please choose a password..."
        />
        <label for="confirmPassword">password</label>
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
