import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
export const allReducers = combineReducers({
    products: productReducer
})
