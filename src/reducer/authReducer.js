import { types } from "../types/types";


// (user) && dispatch(login(user.uid, user.name));

const initialState = JSON.parse(localStorage.getItem('user')) || {
    uid: '',
    name: '',
    logged: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.login:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.name,
                logged: true,
            };
        case types.logout:
            return {
                uid: '',
                name: '',
                logged: false,

            }
        default:
            return state;
    }
}