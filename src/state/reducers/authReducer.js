import {initialState} from "../initialState";
import * as actions from "../actions/actionTypes";

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.signInSucces || actions.signOutSucces:
            return {
                ...state, authMsg: ""
            }
        default:
            return {
                ...state, authMsg: action.payload
            }
    }
}