import { StyledCartListItem } from "../styles/styledComponents/CartListItem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import { removeFromCart } from "../state/actions/cartActions";
import { connect } from "react-redux";

const CartListItem = ({ cartItem, removeFromCart }) => {
  return (
    <StyledCartListItem>
      <span>{cartItem.name}</span>
      <img src={`../images/productImg/${cartItem.img}`} alt="blanco" />
      <StyledLinkButton className="decreaseButton">-</StyledLinkButton>
      <StyledLinkButton className="increaseButton">+</StyledLinkButton>
      <StyledLinkButton
        className="deleteButton"
        onClick={() => {
          removeFromCart(cartItem.id);
        }}
      >
        del
      </StyledLinkButton>
    </StyledCartListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartListItem);
