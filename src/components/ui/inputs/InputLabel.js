import React from 'react'
import { Input } from './Input'

export const InputLabel = ({
    classNameGeneral = "",
    classNameInput = '',
    classNameLabel = '',
    name = '',
    placeholder = '',
    icon = false,
    type = 'text',
    selectInput = false,
    values = []
}) => {
    return (
        <div className={`${classNameGeneral} inla__container`}>
            <p className={`${classNameLabel} inla__label`}>{name}</p>
            <Input
                icon={icon}
                placeholder={placeholder}
                classNameInput={classNameInput}
                selectInput={selectInput}
                values={values}
            />
        </div>
    )
}
