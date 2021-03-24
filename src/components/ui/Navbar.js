import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authStartLogout } from '../../actions/auth'
import { uiCloseDropMenu, uiOpenDropMenu } from '../../actions/ui'
import { imagesPath } from '../../helpers/resources'
import { useOutsideAlerter } from '../../hooks/useOutsideAlert'



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



export const Navbar = () => {
    const dispatch = useDispatch()
    const { openDropMenu } = useSelector(state => state.ui)
    const handleLogOut = () => {
        dispatch(authStartLogout())
    }
    const dropMenuRef = useRef(null);
    const handleClickDropMenu = (e) => {
        // e.preventDefault();
        dispatch(uiCloseDropMenu())
    };
    useOutsideAlerter(dropMenuRef);

    return (
        <div>
            <div className="navbar__container">
                <Link to='/' className="navbar__container-imagotipo">
                    <div to='/' className="navbar__container-imagotipo-imagen">
                        <img src={imagesPath.logoAleNoText} alt="Imagotipo Alejandria" />
                    </div>
                    <h1 className="navbar__container-imagotipo-text"> Instituto De Educación <br /> y Cultura Alejandría</h1>
                </Link>
                <div className="navbar__container-logout">
                    <i
                        className="navbar__container-logout-icon btn fas fa-user-circle"
                        onClick={handleLogOut}
                    />
                </div>
            </div>
            <div ref={dropMenuRef} className={`navbar__dropmenu ${openDropMenu && 'navbar__dropmenuChange'}`}>
                {
                    circlesData.map(({ icon, name, path }, i) => (
                        <Link to={path} key={i} className="navbar__item" onClick={handleClickDropMenu}>
                            <i className={icon}></i>
                            <label>{name}</label>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}
