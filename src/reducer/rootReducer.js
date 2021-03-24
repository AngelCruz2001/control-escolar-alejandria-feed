import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { uiReducer } from "./uiReducer"
import { formsReducer } from "./formsReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    forms: formsReducer,
})
