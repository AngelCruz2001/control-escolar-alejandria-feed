import React from 'react'
import { Select } from '../ui/inputs/Select'
import moment from 'moment';

export const Date = ({
    contentClassName = ""
}) => {
    return (
        <div className={`date__content ${contentClassName}`}>
            <label className="input__label">Fecha de nacimiento</label>
            <div className="date__selects">

                <Select
                    name='day'
                    placeholder="Día"
                    contentClassName="date__selects-day"
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    size="10"
                />
                <Select
                    name='month'
                    placeholder="Mes"
                    contentClassName="date__selects-month"
                    options={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
                />
                <Select
                    name='year'
                    placeholder="Año"
                    contentClassName="date__selects-year"
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                />
            </div>
        </div>
    )
}
