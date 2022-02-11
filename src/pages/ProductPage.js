import { connect } from "react-redux";
import { useEffect } from "react";
import { StyledMain } from "../styles/styledComponents/Main.styled";
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledMain>
      <StyledArticle>
        <ProductList products={products} />
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
