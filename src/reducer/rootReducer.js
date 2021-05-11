import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { uiReducer } from "./uiReducer"
import { formsReducer } from "./formsReducer"
import { panelReducer } from "./panelReducer"
import { payReducer } from "./payReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    forms: formsReducer,
    panel: panelReducer,
    pay: payReducer,
})
