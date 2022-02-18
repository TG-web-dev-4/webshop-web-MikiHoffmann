
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import PageTitle from "../components/PageTitle";
import CartList from "../components/CartList";

const ShoppingCartPage = ({ cartItems }) => {
  console.log("cartItems:", cartItems);
  const pageTitle = "My shopping cart";
  return (
    <>
      <PageTitle className="backgroundImg" pageTitle={pageTitle}/>
      <StyledArticle>
        <CartList cartItems={cartItems} />
      </StyledArticle>
    </>
  );
};

export default ShoppingCartPage;
