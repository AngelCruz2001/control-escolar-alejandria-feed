// import { getUser } from "../helpers/getUser";
import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
// import Swal from 'sweetalert2'

export const authStartLogin = (id, password) => {
    return async (dispatch) => {
        dispatch(authCheckingStart());
        try {
            console.log(id, password)
            const res = await fetchSinToken('auth/login', { id, password }, 'POST')
            const body = await res.json()
            dispatch(authCheckingFinish())
            if (body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                console.log(body)
                dispatch(authLogin(body.id_role, body.user_type, body.id_user, body.email))

            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                    confirmButtonText: 'Tratar de nuevo'
                })
            }
        } catch (error) {
            dispatch(authCheckingFinish())
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }

    }
}

export const authStartChecking = () => {
    return async (dispatch) => {
        dispatch(authCheckingStart())
        const res = await fetchConToken('auth/renew')
        const body = await res.json()
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            console.log(body)
            dispatch(authLogin(body.id_role, body.user_type, body.id_user, body.email))
            dispatch(authCheckingFinish())
        } else {
            dispatch(authCheckingFinish())
            console.log(body)
            Swal.fire({
                title: '¡Oops!',
                text: body.msg,
                icon: 'question',
            })
        }
    }
}


export const authStartLogout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch(authLogout())

    }
}


const authLogin = (id_role, userType, id_user, email) => ({
    type: types.login,
    payload: { id_role, userType, id_user, email }
})


const authLogout = () => ({
    type: types.logout
})


const authCheckingStart = () => ({ type: types.authCheckingStart })
const authCheckingFinish = () => ({ type: types.authCheckingFinish })
