import { types } from "../types/types";


// (user) && dispatch(login(user.uid, user.name));

const initialState = JSON.parse(localStorage.getItem('user')) || {
    user: {},
    logged: false,
    checking: false,


};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.login:
            return {
                ...state,
                user: { ...action.payload },
                logged: true,
            };
        case types.logout:
            return {
                ...state,
                user: {},
                logged: false,
            }
        case types.authCheckingStart:
            return {
                ...state,
                checking: true
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        default:
            return state;
    }
}