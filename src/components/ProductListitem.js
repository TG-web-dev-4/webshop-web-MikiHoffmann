import { connect } from "react-redux";

import { StyledProductListItem } from "../styles/styledComponents/ProductListItem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import { addToCart } from "../state/actions/shopActions";

const ProductListItem = ({ product, addToCart }) => {
  return (
    <StyledProductListItem>
      <span className="itemTitle">
        <h3>{product.name}</h3>
      </span>
      <div className="itemImgContainer">
      <img className="itemImg" src={`../images/productImg/${product.img}`} alt={product.name} />
      </div>
      
      
      <StyledLinkButton className="detailsButton">
        view details
      </StyledLinkButton>
      <span className="itemPrice">{product.price} money</span>
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
