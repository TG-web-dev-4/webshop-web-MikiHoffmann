import { initialState } from "../initialState";
import * as actions from "../actions/actionTypes";

export const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case actions.setProducts:
            return action.payload;
        default:
            return state;
    }
}