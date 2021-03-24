import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"

export const formsStartCreateStudent = () => {
    console.log("Hola a todos, si llegaste aquí, andamos bien. ")
}

export const formsStartCreateTeacher = () => {
    console.log("Hola a todos, si llegaste aquí, andamos bien. ")
}
export const formsStartCreateCampus = (formValues, reset) => {
    return async (dispatch) => {
        try {
            console.log(formValues)
            const res = await fetchConToken('campus', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {

                Swal.fire({
                    title: 'Campus',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreateMajor = (formValues, reset) => {
    return async (dispatch) => {
        try {
            console.log("Llego al fetch")
            const res = await fetchConToken('majors', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Major',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreateScholarship = (formValues, reset) => {
    return async (dispatch) => {
        try {
            console.log("Llego al fetch")
            const res = await fetchConToken('scholarship', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Scholarship',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreatePersonal = (formValues, reset) => {
    return async (dispatch) => {
        try {
            console.log("Llego al fetch")
            const res = await fetchConToken('personal', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Personal',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreateSubject = (formValues, reset) => {
    return async (dispatch) => {
        try {
            console.log("Llego al fetch")
            const res = await fetchConToken('subject', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Subject',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}



export const formsStartGetCampus = () => {

    return async (dispatch) => {
        try {
            const res = await fetchConToken('campus')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetCampus(['asdf', 'asdfasdf']))
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartGetMajors = () => {

    return async (dispatch) => {
        try {
            const res = await fetchConToken('majors')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetMajors([{ id_major: '', major_name: '' }, { id_major: 5, major_name: 'asdfadsf' }]))
            } else {
                console.log(body);
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}



const formsGetCampus = (campus) => ({
    type: types.formsGetCampus,
    payload: campus
});

const formsGetMajors = (majors) => ({
    type: types.formsGetMajors,
    payload: majors
});