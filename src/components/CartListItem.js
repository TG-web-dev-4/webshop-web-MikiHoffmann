import { connect, useSelector } from "react-redux";
import { useState } from "react";
import { StyledCartListItem } from "../styles/styledComponents/CartListItem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../state/actions/shopActions";

const CartListItem = ({
  cartItem,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
}) => {
  const [inputQty, setInputQty] = useState(cartItem.qty);
  const inputQty2 = useSelector((state) => state.shop.cartItems);
  const itemTotalPrice = cartItem.price * inputQty;
  console.log("input1", inputQty);
  console.log("input2", inputQty2);
  const onDecrease = () => {
    setInputQty(inputQty - 1);
    decreaseQuantity(cartItem.id, inputQty);
    if (inputQty <= 1) {
      removeFromCart(cartItem.id);
    }
  };
  const onIncrease = () => {
    setInputQty(inputQty + 1);
    increaseQuantity(cartItem.id, inputQty);
  };
  return (
    <StyledCartListItem>
      <span className="itemTitle">{cartItem.name}</span>
      <span className="qtyDisplay">nr of items: {inputQty}</span>
      <div className="itemImgContainer">
        <img src={`../images/productImg/${cartItem.img}`} alt={cartItem.name} />
      </div>

      <StyledLinkButton className="decreaseButton" onClick={onDecrease}>-</StyledLinkButton>
      <StyledLinkButton className="increaseButton" onClick={onIncrease}>+</StyledLinkButton>

      <img
        src="../images/iconDelete.png"
        alt="delete icon"
        className="deleteButton"
        onClick={() => {
          removeFromCart(cartItem.id);
        }}
      />
      <StyledLinkButton className="detailsButton">view details</StyledLinkButton>
      <span className="itemPrice">total: {itemTotalPrice} money</span>
    </StyledCartListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseQuantity: (id, qty) => dispatch(decreaseQuantity(id, qty)),
    increaseQuantity: (id, qty) => dispatch(increaseQuantity(id, qty)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartListItem);
