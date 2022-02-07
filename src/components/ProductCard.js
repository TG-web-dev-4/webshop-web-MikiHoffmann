import { StyledProductCard } from "../styles/styledComponents/ProductCard.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
const ProductCard = ({ allProducts }) => {
  if (allProducts.length === 0) return <div>loading...</div>;
  //console.log(allProducts[0]);
  return (
    <StyledProductCard>
      <span className="itemTitle">
        <h3>{allProducts[0].prName}</h3>
      </span>
      <img src={`../images/productImg/${allProducts[0].prImg}`} alt="blanco" />
      <span className="itemDescription">{allProducts[0].prDescription}</span>
      <StyledLinkButton>link</StyledLinkButton>
    </StyledProductCard>
  );
};
export default ProductCard;
