import { StyledMain } from "../styles/styledComponents/Main.styled";
import { StyledArticle } from "../styles/styledComponents/Article.styled";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  //console.log(allProducts[0]);
  return (
    <StyledMain>
      <StyledArticle>
        <h2>homepage</h2>
        <div>
          <p>
            welcome to the best way to get your own universe...
          </p>
        </div>
        <ProductCard />
      </StyledArticle>
    </StyledMain>
  );
};

export default HomePage;
