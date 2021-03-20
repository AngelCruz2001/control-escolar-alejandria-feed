import React from 'react'
import { OptionItem } from "./OptionItem";
export const Select = ({
    contentClassName = '',
    options = [],
    valueSelect = '',
    handleInputChange,
    nameSelect = '',
    placeholder = '',
    label = '',
    nexTo = false,
    disabledSelect = false
}) => {
    return (
        <div className={`${contentClassName} ${(nexTo) && 'input__special '}`}>
            <label className="input__label" style={{ opacity: disabledSelect && '0.6' }}>{label}</label>
            <div className={`input__container `} style={{ opacity: disabledSelect && '0.6' }}>
                <select name={nameSelect} value={valueSelect} onChange={() => handleInputChange} disabled={disabledSelect} >
                    <option value='' disabled>{placeholder} </option>
                    {
                        options.map((opt, i) => (
                            <OptionItem key={i} value={opt} />
                        ))
                    }
                </select>
            </div >
        </div>
    )
}
