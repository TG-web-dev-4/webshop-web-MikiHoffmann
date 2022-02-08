import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

export const allReducers = combineReducers({
    products: productReducer,
    cartItems: cartReducer
})
