import React from 'react'

export const Input = ({ icon = false, type = 'text' }) => {
    return (
        <div className="input__container ">
            <div className="input__container-content">
                {(icon) && <i className={`${icon}`}></i>}
                <input type={type} />
            </div>
        </div>
    )
}
