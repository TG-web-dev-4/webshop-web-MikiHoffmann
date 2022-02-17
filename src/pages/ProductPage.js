import { connect } from "react-redux";

import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
  
  return (
      <StyledArticle>
        <ProductList products={products} />
      </StyledArticle>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductPage);
