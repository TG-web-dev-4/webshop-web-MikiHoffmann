
import { StyledMain } from "../styles/styledComponents/Main.styled";
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductList from "../components/ProductList";

const ProductPage = ({ allProducts }) => {
  return (
    <StyledMain>
      <StyledArticle>
        <ProductList allProducts={allProducts} />
      </StyledArticle>
    </StyledMain>
  );
};

export default ProductPage;
