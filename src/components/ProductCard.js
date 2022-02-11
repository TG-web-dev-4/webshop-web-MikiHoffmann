import { StyledProductCard } from "../styles/styledComponents/ProductCard.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
const ProductCard = ({ products }) => {
  return (
    <StyledProductCard>
      <span className="itemTitle">
        <h3>{products[0].name}</h3>
      </span>
      <span className="itemPrice">{products[0].price} money</span>
      <img
        src={`../images/productImg/${products[0].img}`}
        alt={products[0].name}
      />
      <span className="itemDescription">{products[0].description}</span>
      <StyledLinkButton>link</StyledLinkButton>
    </StyledProductCard>
  );
};
export default ProductCard;
