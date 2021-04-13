import { types } from "../types/types";

const initialState = {
    students: [{ id_student: null, student_name: null }],
    campus: [{ id_campus: null, campus_name: null }],
    groups: [{ id_group: null, group_name: null }],
    majors: [{ id_major: null, major_name: null }],
    departments: [{ id_department: null, department_name: null }],
    personal: [{ id_personal: null, personal_name: null }],
    scholarships: [{ id_scholarships: null, scholarships_name: null }],
    courses: [{ id_courses: null, courses_name: null }],
    teachers: [{ id_teachers: null, teachers_name: null }],
    errors: [],
    active: null,
    activePanel: []
}


export const formsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.formsGetStudents:
            return {
                ...state,
                students: action.payload.length ? action.payload : state.students
            }

        case types.formsGetCampus:
            return {
                ...state,
                campus: action.payload.length ? action.payload : state.campus
            }
        case types.formsGetMajors:
            return {
                ...state,
                majors: action.payload.length ? action.payload : state.majors
            }
        case types.formsGetGroups:
            return {
                ...state,
                groups: action.payload.length ? action.payload : state.groups
            }
        case types.formsGetDepartaments:
            return {
                ...state,
                departments: action.payload.length ? action.payload : state.departments
            }
        case types.formsGetPersonal:
            return {
                ...state,
                personal: action.payload.length ? action.payload : state.personal
            }
        case types.formsGetScholarships:
            return {
                ...state,
                scholarships: action.payload.length ? action.payload : state.scholarships
            }
        case types.formsGetCourses:
            return {
                ...state,
                courses: action.payload.length ? action.payload : state.courses
            }
        case types.formsGetTeachers:
            return {
                ...state,
                teachers: action.payload.length ? action.payload : state.teachers
            }
        case types.formsNewError:
            return {
                ...state,
                errors: Object.keys(action.payload)
            }
        case types.formsCleanErrors:
            return {
                ...state,
                errors: []
            }
        case types.formsSetActive:
            return {
                ...state,
                active: action.payload
            }
        case types.formsClearActive:
            return {
                ...state,
                active: null
            }


        case types.formsAddDataStudents:
            console.log(action)
            console.log(state.students[0].id_student)

            return {
                ...state,
                students: state.students[0].id_student ? [action.payload, ...state.students] : [action.payload]
            }

        case types.formsDeleteStudents:
            console.log(action)
            return {
                ...state,
                students: state.students.length ? state.students.filter(student => student.id_student != action.payload) : [{ id_student: null, student_name: null }]
            }
        default:
            return state;
    }
}