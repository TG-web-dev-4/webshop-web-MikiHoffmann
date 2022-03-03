import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
//import { firestoreReducer } from "redux-firestore";
import { shopReducer } from "./shopReducer";

export const allReducers = combineReducers({
  firebase: firebaseReducer,
  //firestore: firestoreReducer,
  shop: shopReducer,
});
