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
    states = false,
    disabledSelect = false,
    idSelect
}) => {
    return (
        <div className={`input__content ${contentClassName} ${(nexTo) && 'input__special '}`}>
            <label className="input__label" style={{ opacity: disabledSelect && '0.6' }}>{label}</label>
            <div name={nameSelect} className={`input__container `} style={{ opacity: disabledSelect && '0.6' }}>
                <div className="input__container-content">
                    <select
                        id={idSelect}
                        name={nameSelect}
                        value={valueSelect}
                        onChange={handleInputChange}
                        disabled={disabledSelect}
                    >
                        <option disabled={true} value=""></option>
                        {
                            options.map((opt, i) => (
                                <OptionItem key={i} options={states ? opt : Object.values(opt)} states={states} />
                            ))
                        }
                    </select>
                </div>
            </div >
        </div>
    )
}
