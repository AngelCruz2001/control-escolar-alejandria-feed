import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { Input } from '../inputs/Input'
import { PanelItem } from './PanelItem'

export const PanelJustAdded = () => {
    const [formValues, handleInputChange] = useForm();
    const { valueInput } = formValues;

    return (
        <>
            <div className="panel__container">
                <h5 className="panel__title">Añadidos recientemente</h5>
                <div className="panel__container-content">
                    <Input
                        icon='fas fa-search'
                        classNameInput="panel__input"
                        nameInput='searchInput'
                        valueInput={valueInput}
                        handleInputChange={handleInputChange}
                    />
                    <PanelItem />
                </div>
            </div>
        </>
    )
}
