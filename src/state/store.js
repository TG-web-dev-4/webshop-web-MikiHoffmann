import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase } from "react-redux-firebase";

import firebase from "../services/FirebaseConfig";
import { allReducers } from "./reducers/allReducers";
import { initialState } from "./initialState";

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore
);
const store = createStoreWithFirebase(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
