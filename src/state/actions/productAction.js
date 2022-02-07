import * as actions from "./actionTypes";

export const setProducts = (products) => {
    return (dispatch) => {
        dispatch({
            type: actions.setProducts,
            payload: products
        })
    }
}