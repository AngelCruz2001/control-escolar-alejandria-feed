import React from 'react'
import { Select } from '../ui/inputs/Select'
import moment from 'moment';
import 'moment/locale/es'
let years = [];
let index = moment().year()
for (index; index >= 1940; index--) {
    years.push(index);
}
export const Date = ({
    contentClassName = "",
    handleInputChange,
    selectDay,
    selectMonth,
    selectYear,
}) => {
    return (
        <div className={`date__content ${contentClassName}`}>
            <label className="input__label">Fecha de nacimiento</label>
            <div className="date__selects">

                <Select
                    placeholder="Día"
                    contentClassName="date__selects-day"
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}
                    size="10"
                    nameSelect="day"
                    valueSelect={selectDay}
                    handleInputChange={handleInputChange}
                    states={true}
                />

                <Select
                    placeholder="Mes"
                    contentClassName="date__selects-month"
                    options={[
                        { value: '01', month: 'Enero' },
                        { value: '02', month: 'Febrero' },
                        { value: '03', month: 'Marzo' },
                        { value: '04', month: 'Abril' },
                        { value: '05', month: 'Mayo' },
                        { value: '06', month: 'Junio' },
                        { value: '07', month: 'Julio' },
                        { value: '08', month: 'Agosto' },
                        { value: '09', month: 'Septiembre' },
                        { value: '10', month: 'Octubre' },
                        { value: '11', month: 'Noviembre' },
                        { value: '12', month: 'Diciembre' },
                    ]}
                    nameSelect="month"
                    valueSelect={selectMonth}
                    handleInputChange={handleInputChange}
                />

                <Select
                    placeholder="Año"
                    contentClassName="date__selects-year"
                    options={years}
                    nameSelect="year"
                    valueSelect={selectYear}
                    handleInputChange={handleInputChange}
                    states={true}
                />

            </div>
        </div>
    )
}
