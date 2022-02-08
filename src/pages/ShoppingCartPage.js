import { StyledMain } from "../styles/styledComponents/Main.styled";
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import CartList from "../components/CartList";

const ShoppingCartPage = ({ cartItems }) => {
  return (
    <StyledMain>
      <StyledArticle>
        <h2>shopping cart</h2>
        <CartList cartItems={cartItems} />
      </StyledArticle>
    </StyledMain>
  );
};

export default ShoppingCartPage;
