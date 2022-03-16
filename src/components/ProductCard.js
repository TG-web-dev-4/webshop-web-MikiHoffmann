import { StyledProductCard } from "../components/styledComponents/ProductCard.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
const ProductCard = ({ product }) => {
  return (
    <StyledProductCard>
      <span className="itemTitle">
        <h3>{product.name}</h3>
      </span>
      <span className="itemPrice">{product.price} money</span>
      <img
        src={`images/productImg/${product.img}`}
        alt={product.name}
      />
      <span className="itemDescription">{product.description}</span>
      <StyledLinkButton>link</StyledLinkButton>
    </StyledProductCard>
  );
};
export default ProductCard;
