import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authStartChecking, authStartLogin } from '../../actions/auth';
import { imagesPath } from '../../helpers/resources';
import { useForm } from '../../hooks/useForm';
export const LoginScreen = () => {
    const { checking } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [formValues, handleInputChange,] = useForm({
        username: "admin",
        password: "sud0_c34_r00t"
    })
    const { username, password } = formValues;
    const handleClickLogin = (e) => {
        e.preventDefault();
        dispatch(authStartLogin(username, password))
    }
    return (
        <div className="container auth__container">
            <div className="auth__login">
                <form className={`${(checking) && "ui_blur "}`} onSubmit={handleClickLogin}>
                    <div className="auth__login-inputs">

                        <input
                            className="auth__login-inputs-input"
                            placeholder="Usuario"
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleInputChange}

                        />
                        <i className="auth__login-inputs-icon fas fa-user-alt"></i>
                    </div>
                    <div className="auth__login-inputs">
                        <input
                            className="auth__login-inputs-input"
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}

                        />
                        <i className="auth__login-inputs-icon fas fa-key"></i>
                    </div>
                    <button
                        className="auth__login-submit btn"
                        type="submit"
                        onClick={handleClickLogin}
                    >
                        <p>Ingresar</p>
                    </button>
                </form>
                {
                    (checking) &&
                    <div className="ui_fadeIn ui_aniContainer">
                        <div className="ui_loadIcon" />
                    </div>
                }
            </div>


            <div className="auth__hero">
                <img className="auth__hero-logo" src={imagesPath.logoAleNoText} alt="Logo Alejandría" />
                <h1 className="auth__hero-text">Instituto de Educación <br /> y Cultura Alejandría S.C.</h1>
            </div>

        </div >
    )
}
