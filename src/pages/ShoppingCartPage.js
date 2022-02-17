import { StyledArticle } from "../styles/styledComponents/Article.styled";
import CartList from "../components/CartList";

const ShoppingCartPage = ({ cartItems }) => {
 
  console.log("cartItems:", cartItems);
  return (
      <StyledArticle>
        <h2>shopping cart</h2>
        <CartList cartItems={cartItems} />
      </StyledArticle>
  );
};

export default ShoppingCartPage;
