import { connect } from "react-redux";

import { StyledMain } from "../styles/styledComponents/Main.styled";
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductCard from "../components/ProductCard";

const HomePage = ({ products }) => {
  const backGround = document.getElementById("backGround");
  console.log(backGround);
  window.addEventListener("scroll", function () {
    backGround.style.transform =
      "background-position(" + window.pageYOffset / 4 + "deg)";
  });
  //console.log(allProducts[0]);
  return (
    <StyledMain>
      <div id="backGround" className="backGround">
        hello
      </div>
      <StyledArticle>
        <h2>homepage</h2>
        <div>
          <p>welcome to the best way to get your own universe...</p>
        </div>
        <ProductCard products={products} />
      </StyledArticle>
    </StyledMain>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(HomePage);
