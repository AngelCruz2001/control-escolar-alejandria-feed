import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"
import { panelAddData, panelDeleteData, panelUpdateData } from "./panel"


//Gets
export const formsStartGetData = (endpoint, type) => {
    return async (dispatch) => {
        const res = await fetchConToken(endpoint);
        const body = await res.json();
        if (body.ok) {
            console.log(type, body[endpoint])
            dispatch(formsGetData(type, body[endpoint]))
        } else {
            console.log(body)
            Swal.fire({
                title: '¡Oops!',
                text: body.msg,
                icon: 'question',
            })
        }
    }
}



//Update
export const formStartUpdate = (formValues, reset, endpoint, text) => {
    return async (dispatch, getState) => {
        try {
            console.log(getState())
            console.log(formValues)
            const res = await fetchConToken(`${endpoint}/${getState().forms.active[getState().panel.id]}`, formValues, 'PUT') //No sabemos, tu siguele la corriente. 
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: text,
                    text: body.msg + '.',
                    icon: 'success',
                })
                dispatch(panelUpdateData(formValues));
                dispatch(formsCleanErrors());
                dispatch(formsClearActive());
                reset();
            } else {
                console.log(body)
                console.log(formValues)

                body.errors && dispatch(formsNewErrors(body.errors))
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
//Delete
export const formsStartDelete = (text, endpoint, reset) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetchConToken(`${endpoint}/${getState().forms.active[getState().panel.id]}`, {}, 'DELETE')
            const body = await res.json();
            if (body.ok) {
                console.log(res)
                console.log(body)
                Swal.fire({
                    title: text,
                    text: body.msg + '.',
                    icon: 'success',
                })
                dispatch(panelDeleteData(getState().forms.active[getState().panel.id]));
                dispatch(formsCleanErrors());
                dispatch(formsClearActive());
                reset();
            } else {
                console.log(body)
                // body.errors && dispatch(formsNewErrors(body.errors))
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

//Create
export const formsStartCreate = (formValues, reset, endpoint, text,) => {
    return async (dispatch, getState) => {

        try {
            const res = await fetchConToken(endpoint, formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: text,
                    text: body.msg + '.',
                    icon: 'success',
                })
                formValues[getState().panel.id] = body[getState().panel.id] //Se asigna el ID al estudiante en nuestro panel, ya que estamos creando.
                dispatch(panelAddData(formValues));
                dispatch(formsCleanErrors());
                reset();
            } else {
                console.log(body)
                dispatch(formsCleanErrors());
                body.errors && dispatch(formsNewErrors(body.errors))
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
                dispatch(formsGetCampus(body.campus))
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
                dispatch(formsGetMajors(body.majors))
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

export const formsStartGetGroups = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('groups')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetGroups(body.groups))
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
export const formsStartGetDepartaments = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('departments')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetDepartaments(body.departments))
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

export const formsStartGetPersonal = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('employees')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetPersonal(body.employees))
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

export const formsStartGetScholarships = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('scholarships')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetScholarships(body.scholarships))
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

export const formsStartGetCourses = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('courses')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetCourses(body.courses))
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

export const formsStartGetTeachers = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken('teachers')
            const body = await res.json()
            if (body.ok) {
                dispatch(formsGetTeachers(body.teachers))
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


const formsUpdate = (data, type) => ({
    type,
    payload: data
});
const formsDeleteData = (id, type) => ({
    type,
    payload: id
});

export const formsGetData = (type, data) => ({ type, payload: data });

export const formsGetDepartaments = (departments) => ({
    type: types.formsGetDepartaments,
    payload: departments
});
export const formsGetCampus = (campus) => ({
    type: types.formsGetCampus,
    payload: campus
});

export const formsGetPersonal = (employees) => ({
    type: types.formsGetPersonal,
    payload: employees
});


export const formsGetMajors = (majors) => ({
    type: types.formsGetMajors,
    payload: majors
});
export const formsGetGroups = (groups) => ({
    type: types.formsGetGroups,
    payload: groups
});
export const formsGetScholarships = (scholarships) => ({
    type: types.formsGetScholarships,
    payload: scholarships
});
export const formsGetCourses = (courses) => ({
    type: types.formsGetCourses,
    payload: courses
});
export const formsGetTeachers = (teachers) => ({
    type: types.formsGetTeachers,
    payload: teachers
});

const formsNewErrors = (errors,) => ({
    type: types.formsNewError,
    payload: errors,
})


export const formsSetActive = (active) => ({
    type: types.formsSetActive,
    payload: active
})
export const formsClearActive = (active) => ({
    type: types.formsClearActive,
    payload: active
})


export const formsCleanErrors = () => ({ type: types.formsCleanErrors });










//Borrar en el futuro
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
                console.log(body)
                body.errors && dispatch(formsNewErrors(body.errors))
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