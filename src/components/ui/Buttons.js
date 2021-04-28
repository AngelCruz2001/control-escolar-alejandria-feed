import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formsCleanErrors, formsClearActive, formsStartDelete } from '../../actions/forms'
import { uiOpenDropMenu } from '../../actions/ui'

export const Buttons = ({ formValues, reset, action, text, endpoint }) => {
    const dispatch = useDispatch()

    const { active } = useSelector(state => state.forms)

    const handleSubmit = () => {
        dispatch(action(formValues, reset, endpoint, text))
    }
    const handleDelete = () => { //Handle Cancel es para cancelar. 
        console.log(formValues) //Este console.log imprime un valor en consola.  
        dispatch(formsStartDelete(text, endpoint, reset))
    }
    const handleCancel = () => { //Handle delete es para borrar.
        dispatch(formsClearActive())
        dispatch(formsCleanErrors())
        reset()
    }
    return (
        <div className="btn__actions">
            <button className="btn btn-formAction" onClick={active ? handleCancel : reset} >
                <span>{`${active ? 'Cancelar' : 'Limpiar'}`} </span>
                <i className="fas fa-brush"></i>
            </button>
            {
                active && <button className="btn btn-formAction" onClick={handleDelete}>
                    <span>Eliminar </span>
                    <i className="fas fa-trash-alt"></i>
                </button>
            }

            <button className="btn btn-formAction" onClick={handleSubmit}>
                <span>Guardar </span>
                <i className="fas fa-save"></i>
            </button>
        </div>
    )
}

export const OpenDropMenuButton = () => {
    const dispatch = useDispatch()
    const handleClickOpenDropMenu = () => {
        dispatch(uiOpenDropMenu())
    }
    return (
        <div className="btn__hamburContainer">
            <button className="btn btn-hambur" onClick={handleClickOpenDropMenu}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
    )
}
