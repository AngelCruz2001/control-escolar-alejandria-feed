import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null,
    openDropMenu: false,
}


export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload,
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null,
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }
        case types.uiOpenDropMenu:
            return {
                ...state,
                openDropMenu: true,
            }
        case types.uiCloseDropMenu:
            return {
                ...state,
                openDropMenu: false,
            }
        default:
            return state;
    }
}