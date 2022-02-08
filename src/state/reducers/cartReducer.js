import { initialState } from "../initialState";
import * as actions from "../actions/actionTypes";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.addToCart:
      const cartItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cartItems.find((cartItem) =>
        cartItem.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, qty: cartItem.qty + 1 }
                : cartItem
            )
          : [...state.cartItems, { ...cartItem, qty: 1 }],
      };
    case actions.removeFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case actions.adjustQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, qty: action.payload.qty }
            : cartItem
        ),
      };
    case actions.displayCartItems:
      return {
        ...state,
        currentCartItem: action.payload,
      };
    default:
      return state;
  }
};
