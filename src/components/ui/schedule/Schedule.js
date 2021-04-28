import React, { useEffect, useState } from "react";
import { Select } from "../inputs/Select";
let optionsTime = [];
for (let index = 9; index < 20; index++) {
  optionsTime.push(`${index}:00`)
}
export const Schedule = ({ special = false, formValues, handleInputChange }) => {

  const [value, setValue] = useState([
    { day: null, start_hour: '9:00', finish_hour: '9:00' },
    { day: null, start_hour: '9:00', finish_hour: '9:00' },
    { day: null, start_hour: '9:00', finish_hour: '9:00' },
    { day: null, start_hour: '9:00', finish_hour: '9:00' },
    { day: null, start_hour: '9:00', finish_hour: '9:00' },
    { day: null, start_hour: '9:00', finish_hour: '9:00' },
    { day: null, start_hour: '9:00', finish_hour: '9:00' }]);

  useEffect(() => {
    console.log(formValues)
    let valuesInitial = [...value];
    formValues.time_table.map((data, i) => {
      valuesInitial[data.day] = { ...data };
    })
    setValue(valuesInitial)
  }, [formValues]);

  const handleInputChangeSchedule = ({ target }) => {
    let valuesSelect = [...value];
    if (target.type == 'checkbox') {
      valuesSelect[target.id].day = target.checked ? Number.parseInt(target.id) : null;
    } else {
      let option = valuesSelect[target.id]
      option[target.name] = target.value;
    }

    setValue(valuesSelect)
    let valueInputChange = valuesSelect.map((data, i) => ((data.day) ? { ...data, day: target.id == i ? Number.parseInt(target.id) : data.day } : data))
    handleInputChange({
      target: {
        name: 'time_table',
        value: valueInputChange.filter((data, i) => ((data.day != null)))
      }
    })
  }

  return (
    <div className="sch__container">
      <label className="sch__schedule">
        Horario:{" "}
        <span className="sch__schedule-span">(Seleccione día(s) y hora)</span>
      </label>
      <div className="sch__table">
        {["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"].map((day, i) => (
          <div className="sch__table-item" key={day}>
            <div className={`sch__table-item-day ${value[i].day === null ? '' : 'sch__table-item-dayCheck'}`} >
              <label className='sch__label'>{day}</label>
              <input
                className="sch__inputDay"
                name={day}
                id={i}
                type="checkbox"
                checked={value[i].day === null ? false : true}
                onChange={handleInputChangeSchedule}
              />
            </div>
          </div>

        ))}
        {["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"].map((day, i) => (
          <div className="sch__selectors" key={i}>
            <div className="sch__selectors-container">
              <Select
                contentClassName="sch__inputs-from sch__selectors-container-item"
                label="De:"
                nexTo={true}
                disabledSelect={!(value[i].day === null ? false : true)}
                options={optionsTime}
                states={true}
                handleInputChange={handleInputChangeSchedule}
                valueSelect={value[i].start_hour}
                nameSelect="start_hour"
                idSelect={i}
              />
              <Select
                contentClassName="sch__inputs-from sch__selectors-container-item"
                label="&nbsp;&nbsp;A:"
                nexTo={true}
                disabledSelect={!(value[i].day === null ? false : true)}
                options={optionsTime}
                states={true}
                handleInputChange={handleInputChangeSchedule}
                valueSelect={value[i].finish_hour}
                nameSelect="finish_hour"
                idSelect={i}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
