import React from 'react'
import { useDispatch } from 'react-redux'
import { formsCleanErrors, formsSetActive, formsStartGetStudents } from '../../../actions/forms';


export const PanelItem = ({ text = "", item, name }) => {

    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(formsSetActive(item))
        dispatch(formsCleanErrors())
    }

    return (
        <div
            className="panel__container-content-item"
            onClick={handleEdit}
        >
            <div className="panel__container-content-item-container">

                <p className="panel__container-content-item-container-text"> {item[`${name}`]}</p>
                <i className="fas fa-edit"></i>
            </div>
        </div>
    )
}
