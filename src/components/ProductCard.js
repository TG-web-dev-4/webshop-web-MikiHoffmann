import { StyledProductCard } from "../styles/styledComponents/ProductCard.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
const ProductCard = ({ allProducts }) => {
  if (allProducts.length === 0) return <div>loading...</div>;
  console.log(allProducts[0]);
  return (
    <StyledProductCard key={allProducts[0].id}>
      <span className="itemTitle">
        <h3>{allProducts[0].name}</h3>
      </span>
      <span className="itemPrice">&euro; {allProducts[0].price}</span>
      <img src={`../images/productImg/${allProducts[0].img}`} alt="blanco" />
      <span className="itemDescription">{allProducts[0].description}</span>
      <StyledLinkButton>link</StyledLinkButton>
    </StyledProductCard>
  );
};
export default ProductCard;
