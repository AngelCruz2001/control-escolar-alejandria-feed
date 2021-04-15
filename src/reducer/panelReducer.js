import { types } from "../types/types";

const initialState = {
    name: '',
    activePanel: [],
    id: '',
    type: '',
}

export const panelReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.panelSetData:
            return {
                ...state,
                // screen: action.payload.screen,
                activePanel: action.payload.data,
                name: action.payload.name,
                id: action.payload.id,
                type: action.payload.type
            }
        case types.panelAddData:
            return {
                ...state,
                activePanel: [action.payload, ...state.activePanel]
            }
        case types.panelUpdateData:
            return {
                ...state,
                activePanel: state.activePanel.map(element => (element[state.id] === action.payload[state.id]) ? action.payload : element)
            }
        case types.panelDeleteData:
            return {
                ...state,
                activePanel: state.activePanel.filter(element => (element[state.id] != action.payload))
            }
        case types.panelClearData:
            return initialState

        default:
            return state;
    }

}
