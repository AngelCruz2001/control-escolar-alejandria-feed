import React from 'react'

export const OptionItem = ({ options, states = false }) => {
    return (
        <option value={states ? options : options[0]}>{states ? options : options[1]}</option>
    )
}
