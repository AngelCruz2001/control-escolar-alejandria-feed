import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authStartLogout } from '../../actions/auth'
import { imagesPath } from '../../helpers/resources'

export const Navbar = () => {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(authStartLogout())
    }
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
                <div className="navbar__dropmenu">

                    


                </div>
            </div>
        </div>
    )
}
