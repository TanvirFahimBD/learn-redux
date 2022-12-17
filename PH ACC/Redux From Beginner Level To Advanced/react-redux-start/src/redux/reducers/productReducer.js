import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

export const initialState = {
    cart: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {}
        }
        case REMOVE_FROM_CART: {
            return {}
        }
        default: return state;
    }

}
