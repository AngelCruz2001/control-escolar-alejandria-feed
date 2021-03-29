import { types } from "../types/types";

const initialState = {
    campus: [],
    groups: [],
    majors: [],
    departments: [],
}


export const formsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.formsGetCampus:
            return {
                ...state,
                campus: action.payload.length ? action.payload : [{ id_campus: null, campus_name: null }]
            }
        case types.formsGetMajors:
            return {
                ...state,
                majors: action.payload.length ? action.payload : [{ id_group: null, group_name: null }]
            }
        case types.formsGetGroups:
            return {
                ...state,
                groups: action.payload.length ? action.payload : [{ id_major: null, major_name: null }]
            }
        case types.formsGetDepartaments:
            return {
                ...state,
                departments: action.payload.length ? action.payload : [{ id_department: null, department_name: null }]
            }

        default:
            return state;
    }
}