import { connect } from "react-redux";

import { StyledPageTitle } from "../styles/styledComponents/PageTitle.styled";
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
  return (
    <>
      <StyledPageTitle className="backgroundImg">products</StyledPageTitle>
      <StyledArticle>
        <ProductList products={products} />
      </StyledArticle>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductPage);
