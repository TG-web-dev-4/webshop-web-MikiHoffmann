import { connect } from "react-redux";

import { StyledProductListItem } from "../styles/styledComponents/ProductListItem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import { addToCart } from "../state/actions/shopActions";

const ProductListItem = ({ product, addToCart }) => {
  return (
    <StyledProductListItem>
      <img src={`../images/productImg/${product.img}`} alt="blanco" />
      <span className="itemTitle">
        <h3>{product.name}</h3>
      </span>
      <StyledLinkButton>view product</StyledLinkButton>
      <span className="itemPrice">{product.price} money</span>
      <span className="itemDescription">{product.description}</span>
      <StyledLinkButton
        className="addButton"
        onClick={() => {
          addToCart(product.id);
        }}
      >
        add to my shoppingcart
      </StyledLinkButton>
    </StyledProductListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductListItem);
