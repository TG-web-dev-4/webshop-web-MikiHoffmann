import { StyledProductCard } from "../components/styledComponents/ProductCard.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
const ProductCard = ({ products }) => {
  return (
    <StyledProductCard>
      <span className="itemTitle">
        <h3>{products[1].name}</h3>
      </span>
      <span className="itemPrice">{products[1].price} money</span>
      <img
        src={`images/productImg/${products[1].img}`}
        alt={products[1].name}
      />
      <span className="itemDescription">{products[1].description}</span>
      <StyledLinkButton>link</StyledLinkButton>
    </StyledProductCard>
  );
};
export default ProductCard;
