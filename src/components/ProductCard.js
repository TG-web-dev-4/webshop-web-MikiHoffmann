import { StyledProductCard } from "../styles/styledComponents/ProductCard.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
const ProductCard = () => {
  return (
    <StyledProductCard>
      <span className="itemTitle">
        <h3>title</h3>
      </span>
      <span className="itemPrice">&euro; price</span>
      <img src={`../images/productImg/BlancoImage.png`} alt="blanco" />
      <span className="itemDescription">description</span>
      <StyledLinkButton>link</StyledLinkButton>
    </StyledProductCard>
  );
};
export default ProductCard;
