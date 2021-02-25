import React from 'react'
import { OptionItem } from "./OptionItem";
export const Select = ({
    contentClassName = '',
    options = [],
    valueSelect = '',
    handleInputChange,
    nameSelect = '',
    placeholder = '',
    label = ''
}) => {
    return (
        <div className={`${contentClassName}`}>
            <label className="input__label">{label}</label>
            <div className={`input__container `}>
                <select name={nameSelect} value={valueSelect} onChange={() => handleInputChange} >
                    <option value='' disabled>{placeholder}</option>
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
