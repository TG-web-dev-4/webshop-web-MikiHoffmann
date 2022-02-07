import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { allReducers } from "./reducers/allReducers";
import { initialState } from "./initialState";

const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store