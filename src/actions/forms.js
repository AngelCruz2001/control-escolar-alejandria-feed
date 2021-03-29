import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"

export const formsStartCreateStudent = (formValues, reset) => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('students', { ...formValues, birthdate: `${formValues.year}-${formValues.month}-${formValues.day}` }, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Estudiantes',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

export const formsStartCreateTeacher = (formValues, reset) => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('teachers', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Maestro',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreateGroups = (formValues, reset) => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('groups', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Grupos',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreateCampus = (formValues, reset) => {
    return async (dispatch) => {
        try {
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
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreateMajor = (formValues, reset) => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('majors', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Hecho.',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartCreateScholarship = (formValues, reset) => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('scholarships', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Becas',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

export const formsStartCreatePersonal = (formValues = {}, reset) => {
    return async (dispatch) => {
        try {
            // formValues.email = 'asdfg@example.com';
            const res = await fetchConToken('employees', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Personal',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

export const formsStartCreateSubject = (formValues, reset) => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('courses', formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: 'Materia',
                    text: body.msg + '.',
                    icon: 'success',
                })
                reset();
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
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
                dispatch(formsGetCampus(body.campus))
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
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
                dispatch(formsGetMajors(body.majors))
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

export const formsStartGetGroups = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('groups')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetGroups(body.groups))
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const formsStartGetDepartaments = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('departments')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetDepartaments(body.departments))
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}



const formsGetDepartaments = (departments) => ({
    type: types.formsGetDepartaments,
    payload: departments
});
const formsGetCampus = (campus) => ({
    type: types.formsGetCampus,
    payload: campus
});

const formsGetMajors = (majors) => ({
    type: types.formsGetMajors,
    payload: majors
});
const formsGetGroups = (groups) => ({
    type: types.formsGetGroups,
    payload: groups
});