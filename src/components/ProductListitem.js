import { StyledProductListitem } from "../styles/styledComponents/ProductListitem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";

const ProductListitem = ({ product }) => {
  return (
    <StyledProductListitem>
      <img src={`../images/productImg/${product.img}`} alt="blanco" />
      <span className="itemTitle"><h3>{product.name}</h3></span>
      <span className="itemPrice">&euro;{product.price}</span>
      <span className="itemDescription">{product.description}</span>
    <StyledLinkButton>link</StyledLinkButton>
    </StyledProductListitem>
  );
};


export default ProductListitem;
