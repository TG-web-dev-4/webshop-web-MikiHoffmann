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

export const adjustQuantity = (cartItemID, value) => {
  return {
    type: actions.adjustQuantity,
    payload: {
      id: cartItemID,
      qty: value,
    },
  };
};

export const displayCurrentItem = (cartItem) => {
  return {
    type: actions.displayCurrentItem,
    payload: cartItem,
  };
};
