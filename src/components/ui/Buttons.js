import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenDropMenu } from '../../actions/ui'

export const Buttons = ({ formValues, reset, action }) => {
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(action(formValues, reset))
    }

    return (
        <div className="btn__actions">
            <button className="btn btn-formAction" onClick={reset}>
                <span>Limpiar </span>
                <i className="fas fa-brush"></i>

            </button>
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
