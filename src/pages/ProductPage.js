import { connect } from "react-redux";

import { StyledMain } from "../styles/styledComponents/Main.styled";
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
  return (
    <StyledMain>
      <StyledArticle>
        <ProductList products={products}/>
      </StyledArticle>
    </StyledMain>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductPage);
