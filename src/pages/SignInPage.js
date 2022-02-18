import { StyledArticle } from "../styles/styledComponents/Article.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import PageTitle from "../components/PageTitle";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const SignInPage = () => {
  const pageTitle = "Join the Spacewalkers";
  return (
    <>
      <PageTitle className="backgroundImg" pageTitle={pageTitle} />
      <StyledArticle>
        <h3>we are happy to welcome you to the spaceWalkers-club!</h3>
        <p>for the best shopping experience join spaceWalkers</p>
        <p>
          You do not have an account yet?<br></br>
          No problem, just
          <StyledLinkButton>Sign In</StyledLinkButton>!
        </p>
        <p>
          If you are already a privileged member:<br></br>
          Just <StyledLinkButton>Sign On</StyledLinkButton>!
        </p>
      </StyledArticle>
      <StyledArticle>
        <SignUpForm />
      </StyledArticle>
      <StyledArticle>
        <SignInForm />
      </StyledArticle>
    </>
  );
};

export default SignInPage;
