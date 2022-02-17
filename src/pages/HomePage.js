import { connect } from "react-redux";

import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductCard from "../components/ProductCard";

const HomePage = ({ products }) => {
  //console.log(allProducts[0]);
  return (
      <StyledArticle>
        <h2>homepage</h2>
        <div>
          <p>welcome to the best way to get your own universe...</p>
        </div>
        <ProductCard products={products} />
      </StyledArticle>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(HomePage);
