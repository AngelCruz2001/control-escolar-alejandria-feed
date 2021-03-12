// import { getUser } from "../helpers/getUser";
import { types } from "../types/types";
// import Swal from 'sweetalert2'

export const authStartChecking = (username, password) => {


    return (dispatch) => {

        dispatch(authCheckingStart());
        setTimeout(() => {

            dispatch(authCheckingFinish())
            dispatch(authLogin(username, password))
        }, 1000);
        // Swal.fire({
        //     title: '!Oops!',
        //     text: infoUser.error,
        //     icon: 'question',
        //     confirmButtonText: 'Tratar de nuevo'
        // })
    }
}
export const authStartLogout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch(authLogout())

    }
}

const authLogin = (username, password) => ({
    type: types.login,
    payload: {
        username,
        password
    }
})

const authLogout = () => ({
    type: types.logout
})


const authCheckingStart = () => ({ type: types.authCheckingStart })
const authCheckingFinish = () => ({ type: types.authCheckingFinish })
