import { connect } from "react-redux";

import { StyledArticle } from "../styles/styledComponents/Article.styled";
import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";

const HomePage = ({ products }) => {
  //console.log(allProducts[0]);
  const pageTitle = "Welcome to the best way to get your own universe";
  return (
    <>
      <PageTitle pageTitle={pageTitle}/>
      <StyledArticle>
        
        <ProductCard products={products} />
      </StyledArticle>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(HomePage);
