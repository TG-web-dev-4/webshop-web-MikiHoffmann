import { connect } from "react-redux";
import { useState } from "react";
import { StyledCartListItem } from "../styles/styledComponents/CartListItem.styled";
import { adjustQuantity, removeFromCart } from "../state/actions/shopActions";

import Selector from "../components/Selector";

const CartListItem = ({ cartItem, adjustQuantity, removeFromCart }) => {
  const [inputQty, setInputQty] = useState(cartItem.qty);
  const itemTotalPrice = cartItem.price * inputQty;
  console.log(itemTotalPrice)
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setInputQty(e.target.value);
    adjustQuantity(cartItem.id, e.target.value);
  };
  const options = [1, 2, 3, 4, 5];
  return (
    <StyledCartListItem>
      <span className="itemTitle">{cartItem.name}</span>
      <span className="qtyDisplay"> times:{inputQty}</span>
      <img src={`../images/productImg/${cartItem.img}`} alt={cartItem.name} />
      <span className="adjustSelector">
        adjust amount:
        <Selector selectorOptions={options} onChangeHandler={onChangeHandler} />
      </span>
      <img
        src="../images/iconDelete.png"
        alt="delete icon"
        className="deleteButton"
        onClick={() => {
          removeFromCart(cartItem.id);
        }}
      />
    </StyledCartListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartListItem);
