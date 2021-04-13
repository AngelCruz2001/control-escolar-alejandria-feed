import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"


//Gets
export const formsStartGetStudents = () => {
    return async (dispatch) => {
        const res = await fetchConToken('students');
        const body = await res.json();
        if (body.ok) {
            dispatch(formsGetStudents(body.students))
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
export const formStartUpdate = (formValues, reset, type, endpoint, text, id) => {
    return async (dispatch) => {
        console.log(endpoint)
        try {
            const res = await fetchConToken(`${endpoint}/${formValues[id]}`, formValues, 'PUT')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: text,
                    text: body.msg + '.',
                    icon: 'success',
                })
                dispatch(formsUpdate({ data: formValues, id }, type));
                dispatch(formsCleanErrors());
                dispatch(formsClearActive());
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
//Delete
export const formsStartDelete = (text, endpoint, id, reset, typeDelete) => {
    return async (dispatch) => {
        console.log(id)
        console.log(endpoint)
        try {
            const res = await fetchConToken(`${endpoint}/${id}`, {}, 'DELETE')
            const body = await res.json();
            if (body.ok) {
                console.log(res)
                console.log(body)
                Swal.fire({
                    title: text,
                    text: body.msg + '.',
                    icon: 'success',
                })
                dispatch(formsDeleteData(id, typeDelete));
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
export const formsStartCreate = (formValues, reset, type, endpoint, text,) => {
    return async (dispatch) => {
        console.log(type)

        try {
            const res = await fetchConToken(endpoint, formValues, 'POST')
            const body = await res.json();
            if (body.ok) {
                Swal.fire({
                    title: text,
                    text: body.msg + '.',
                    icon: 'success',
                })
                console.log(body)
                dispatch(formsAddData(formValues, type));
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

const formsAddData = (data, type) => ({
    type,
    payload: data
});

const formsUpdate = (data, type) => ({
    type,
    payload: data
});
const formsDeleteData = (id, type) => ({
    type,
    payload: id
});

const formsGetDepartaments = (departments) => ({
    type: types.formsGetDepartaments,
    payload: departments
});
const formsGetCampus = (campus) => ({
    type: types.formsGetCampus,
    payload: campus
});

const formsGetPersonal = (employees) => ({
    type: types.formsGetPersonal,
    payload: employees
});

const formsGetStudents = (students) => ({
    type: types.formsGetStudents,
    payload: students
})

const formsGetMajors = (majors) => ({
    type: types.formsGetMajors,
    payload: majors
});
const formsGetGroups = (groups) => ({
    type: types.formsGetGroups,
    payload: groups
});
const formsGetScholarships = (scholarships) => ({
    type: types.formsGetScholarships,
    payload: scholarships
});
const formsGetCourses = (courses) => ({
    type: types.formsGetCourses,
    payload: courses
});
const formsGetTeachers = (teachers) => ({
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

