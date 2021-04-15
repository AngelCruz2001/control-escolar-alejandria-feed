import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import { formsStartGetCampus, formsStartGetDepartaments, formsStartGetGroups, formsStartGetMajors, formsStartGetPersonal, formsStartGetScholarships, formsStartGetCourses, formsStartGetTeachers, formsClearActive, formsCleanErrors, formsGetData, formsStartGetData } from '../../actions/forms';
import { iconsPath, imagesPath } from '../../helpers/resources';
import { types } from '../../types/types';
import { CircleOptionFeed } from './CircleOptionFeed';
let bandera = true;
export const FeedScreen = () => {
    const dispatch = useDispatch()
    const circlesData = [
        {
            name: 'Alumnos',
            icon: 'fas fa-user-graduate',
            path: "/estudiantes",
        },
        {
            name: 'Docentes',
            icon: 'fas fa-user-tie',
            path: "/docentes",
        },
        {
            name: 'Personal',
            icon: 'fas fa-user-friends',
            path: "/personal",
        },
        {
            name: 'Grupos',
            icon: 'fas fa-id-badge',
            path: "/grupos",
        },
        {
            name: 'Campus',
            icon: 'fas fa-university',
            path: "/campus",
        },
        {
            name: 'Materias',
            icon: 'fas fa-book-open',
            path: "/materia",
        },
        {
            name: 'Carreras',
            icon: 'fas fa-graduation-cap',
            path: "/carrera",
        },
        {
            name: 'Becas',
            icon: 'fas fa-money-check-alt',
            path: "/beca",
        },
    ]
    useEffect(() => {
        if (bandera) {
            console.log("Oh no")
            bandera = false;
            dispatch(formsStartGetData('students', types.formsGetStudents))
            dispatch(formsStartGetCampus())
            dispatch(formsStartGetMajors())
            dispatch(formsStartGetGroups())
            dispatch(formsStartGetDepartaments())
            dispatch(formsStartGetPersonal())
            dispatch(formsStartGetScholarships())
            dispatch(formsStartGetCourses())
            dispatch(formsStartGetTeachers())
            dispatch(formsClearActive())
            dispatch(formsCleanErrors())
        }
    }, [])


    return (
        <div className="containerSection feed__container">
            <div className="feed__options">
                {
                    circlesData.map((data, i) => (
                        <CircleOptionFeed
                            key={i}
                            {...data}
                        />
                    ))
                }
            </div>
        </div>
    )
}