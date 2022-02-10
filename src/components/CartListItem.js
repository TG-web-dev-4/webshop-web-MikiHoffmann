import { connect } from "react-redux";
import { useState } from "react";
import { StyledCartListItem } from "../styles/styledComponents/CartListItem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import { adjustQuantity, removeFromCart } from "../state/actions/shopActions";

import Selector from "../components/Selector";

const CartListItem = ({ cartItem, adjustQuantity, removeFromCart }) => {
  const [inputQty,setInputQty] = useState(cartItem.qty);
  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setInputQty(e.target.value);
    adjustQuantity(cartItem.id, e.target.value);
  }
  const options = [1, 2, 3, 4, 5];
  return (
    <StyledCartListItem>
      <span>{cartItem.name}</span>
      <span> times:{inputQty}</span>
      <img src={`../images/productImg/${cartItem.img}`} alt="blanco" />
      <Selector
        selectorOptions={options}
        onChangeHandler={onChangeHandler}
      />
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
    adjustQuantity: (id,value) => dispatch(adjustQuantity(id,value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartListItem);
