import React from 'react'

export const Input = ({
    inputClassName = '',
    contentClassName = '',
    icon = false,
    type = 'text',
    placeholder = '',
    label = '',
    nameInput = '',
    valueInput = '',
    handleInputChange, 
    disabledInput=false,
    errorInput = false,
}) => {
    return (
     

            <div className={`input__content ${contentClassName} `}>
                <label className="input__label">{label}</label>
                <div name={nameInput} className={`input__container ${inputClassName} ${errorInput ? 'input__error' : ''}`} >
                    <div className="input__container-content">
                        {(icon) && <i className={`${icon}`}></i>}
                        <input
                            className={`input__input`}
                            type={type}
                            placeholder={placeholder}
                            name={`${nameInput}`}
                            value={valueInput}
                            onChange={handleInputChange}
                            disabled={disabledInput}
                            />
                    </div>
                </div>

            </div>
       
    )
}
