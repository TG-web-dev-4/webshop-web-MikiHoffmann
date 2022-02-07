import { StyledProductListitem } from "../styles/styledComponents/ProductListitem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";

const ProductListitem = ({ product }) => {
  return (
    <StyledProductListitem>
      <img src={`../images/productImg/${product.prImg}`} alt="blanco" />
      <span className="itemTitle"><h3>{product.prName}</h3></span>
      <span className="itemDescription">{product.prDescription}</span>
    <StyledLinkButton>link</StyledLinkButton>
    </StyledProductListitem>
  );
};

export default ProductListitem;
