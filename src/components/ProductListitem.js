import { StyledProductListitem } from "../styles/styledComponents/ProductListitem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import { addToCart } from "../state/actions/cartActions";
import { connect } from "react-redux";

const ProductListitem = ({ product, addToCart }) => {
  return (
    <StyledProductListitem>
      <img src={`../images/productImg/${product.img}`} alt="blanco" />
      <span className="itemTitle"><h3>{product.name}</h3></span>
      <span className="itemPrice">&euro;{product.price}</span>
      <span className="itemDescription">{product.description}</span>
    <StyledLinkButton onClick={() => {addToCart(product.id)}}>link</StyledLinkButton>
    </StyledProductListitem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}


export default connect(null,mapDispatchToProps)(ProductListitem);
