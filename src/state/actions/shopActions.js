import * as actions from "./actionTypes";

export const addToCart = (cartItemID) => {
  return {
    type: actions.addToCart,
    payload: {
      id: cartItemID,
    },
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

export const decreaseQuantity = (cartItemID, inputQty) => {
  return {
    type: actions.decreaseQuantity,
    payload: {
      id: cartItemID,
      qty: inputQty,
    },
  };
};
export const increaseQuantity = (cartItemID, inputQty) => {
  return {
    type: actions.increaseQuantity,
    payload: {
      id: cartItemID,
      qty: inputQty,
    },
  };
};

export const displayCurrentItem = (cartItemID) => {
  return {
    type: actions.displayCurrentItem,
    payload: cartItemID,
  };
};
