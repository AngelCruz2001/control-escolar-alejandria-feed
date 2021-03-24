import { types } from "../types/types";

const initialState = {
    /*Cosa que tienes que pensar*/
    campus: [],
    majors: []
}


export const formsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.formsGetCampus:
            return {
                ...state,
                campus: action.payload
            }
        case types.formsGetMajors:
            return {
                ...state,
                majors: action.payload
            }

        default:
            return state;
    }
}