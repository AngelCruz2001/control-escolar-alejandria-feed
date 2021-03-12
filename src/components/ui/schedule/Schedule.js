import React from 'react'
import { Select } from '../inputs/Select'

export const Schedule = ({
    special = false,
}) => {
    return (
        <div className="sch__container">
            <div className="sch__daysItems">
                <label className="sch__titleDays">Horario:</label>
                {
                    ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'].map((day, i) => (
                        <div className="sch__card" key={i}>
                            <label className="">{day}</label>
                        </div>
                    ))
                }
            </div>
            <div className="sch__time">
                <div className="sch__selectors">
                    <Select contentClassName="sch__inputs-from" label="De:" nexTo={true} />
                    <Select contentClassName="sch__inputs-to" label="A:" nexTo={true} />
                </div>
                <label className="sch__labelDay"> Lunes</label>
            </div>
        </div>
    )
}