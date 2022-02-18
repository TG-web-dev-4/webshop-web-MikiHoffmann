import { StyledPageTitle } from "../styles/styledComponents/PageTitle.styled";

const PageTitle = ({ pageTitle }) => {
  return (
    <>
      <StyledPageTitle className="backgroundImg">{pageTitle}</StyledPageTitle>
    </>
  );
};

export default PageTitle;
