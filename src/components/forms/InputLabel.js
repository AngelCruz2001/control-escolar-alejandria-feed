import React from 'react'
import{Input} from '../ui/Input'

export const InputLabel = ({name}) => {
    return (
        <div className="">
            <div className="">
                <p>{name}</p>
                <Input /> 
            </div>
        </div>
    )
}
