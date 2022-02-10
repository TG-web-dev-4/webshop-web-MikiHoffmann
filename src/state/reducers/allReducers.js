import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";

export const allReducers = combineReducers({
    shop: shopReducer
})
