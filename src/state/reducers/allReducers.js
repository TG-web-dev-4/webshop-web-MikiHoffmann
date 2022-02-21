import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { authReducer } from "./authReducer";
import { shopReducer } from "./shopReducer";

export const allReducers = combineReducers({
    firebaseReducer,
    authReducer,
    shop: shopReducer
})
