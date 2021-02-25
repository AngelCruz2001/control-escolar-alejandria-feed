import React from 'react'
import { Input } from '../inputs/Input'
import { PanelItem } from './PanelItem'

export const PanelJustAdded = () => {
    return (
        <div className="panel__container">
            <div className="panel__container-content">

                <Input
                    icon='fas fa-search'
                    classNameInput="panel__input"
                />
                <PanelItem />
            </div>
        </div>
    )
}