import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formsGetData } from '../../../actions/forms'
import { useForm } from '../../../hooks/useForm'
import { types } from '../../../types/types'
import { Input } from '../inputs/Input'
import { PanelItem } from './PanelItem'

export const PanelJustAdded = () => {

    const { activePanel, id, name, type } = useSelector(state => state.panel)
    const [formValues, handleInputChange] = useForm();
    const { valueInput } = formValues;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(formsGetData(type, activePanel))
    }, [activePanel])
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
                    {
                        (activePanel.length)
                            ?
                            activePanel.map((item, i) => (
                                <PanelItem key={item[id]} item={item} name={name} />
                            ))
                            :
                            <p>No hay información por el momento</p>
                    }
                </div>
            </div>
        </>
    )
}
