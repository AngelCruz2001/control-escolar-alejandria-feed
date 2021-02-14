import { getUser } from "../helpers/getUser";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const startLogin = (username, password) => {
    return (dispatch) => {

        const infoUser = getUser(username, password);
        console.log(infoUser)
        if (!infoUser.error) {
            const {uid, name} = infoUser;
            localStorage.setItem('user', JSON.stringify({ uid, name, logged: true }))
            dispatch(login(uid, name))
        } else {
            Swal.fire({
                title: '!Oops!',
                text: infoUser.error,
                icon: 'question',
                confirmButtonText: 'Tratar de nuevo'
            })
        }
    }
}


export const login = (uid, name) => ({
    type: types.login,
    payload: {
        uid,
        name
    }
})

export const logout = (uid, name) => ({
    type: types.logout,

})