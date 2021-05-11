import { types } from "../types/types";

const initialState = {
    active: false,
}

export const payReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.paySetActive:
            return {
                ...state,
                active: true,
            }
        default:
            return state;
    }

}
