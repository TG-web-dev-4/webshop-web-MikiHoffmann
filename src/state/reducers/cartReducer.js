import { initialState } from "../initialState";
import * as actions from "../actions/actionTypes";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.addToCart:
      console.log("state:", initialState);
      //const cartItem = action.payload;
       const cartItem = initialState.products.find(
         (product) => product.id === action.payload.id
       );
       const inCart = initialState.cartItems.find((cartItem) =>
         cartItem.id === action.payload.id ? true : false
       );
       console.log("cartItem:",cartItem)
       console.log("inCart:", inCart)
      return {
        
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
