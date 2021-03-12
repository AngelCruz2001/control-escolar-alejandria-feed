import React from 'react'
import { iconsPath, imagesPath } from '../../helpers/resources';
import { CircleOptionFeed } from './CircleOptionFeed';

export const FeedScreen = () => {
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
            path: "/students",
        },
        {
            name: 'Materias',
            icon: 'fas fa-book-open',
            path: "/students",
        },
        {
            name: 'Carreras',
            icon: 'fas fa-graduation-cap',
            path: "/students",
        },
        {
            name: 'Becas',
            icon: 'fas fa-money-check-alt',
            path: "/students",
        },
    ]
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