import * as actions from "./actionTypes/cartActions";

export const addToCart = (cartItemID) => {
  return (dispatch) => {
    dispatch({
      type: actions.addToCart,
      payload: {
        id: cartItemID,
      },
    })
    
  };
};

export const removeFromCart = (cartItemID) => {
  return {
    type: actions.removeFromCart,
    payload: {
      id: cartItemID,
    },
  };
};

export const adjustQuantity = (cartItemID, value) => {
  return {
    type: actions.adjustQuantity,
    payload: {
      id: cartItemID,
      qty: value,
    },
  };
};

export const displayCartItems = (cartItem) => {
  return {
    type: actions.displayCartItems,
    payload: cartItem,
  };
};
