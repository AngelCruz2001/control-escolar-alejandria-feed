import React from 'react'

export const PanelItem = ({ text = "" }) => {
    return (
        <div className="panel__container-content-item">
            <div className="panel__container-content-item-container">

                <p className="panel__container-content-item-container-text"> {text} </p>
                <i className="fas fa-edit"></i>
            </div>
        </div>
    )
}
