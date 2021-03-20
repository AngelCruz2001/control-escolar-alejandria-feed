import React, { useState } from "react";
import { Select } from "../inputs/Select";

export const Schedule = ({ special = false }) => {
  const [value, setValue] = useState({
    Lunes: false,
    Martes: false,
    Miercoles: false,
    Jueves: false,
    Viernes: false,
    Sabado: false,
    Domingo: false
  });

  const reset = () => {
    setValue({});
  }

  const handleInputChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.checked
    })
  }

  return (
    <div className="sch__container">
      <label className="sch__schedule">
        Horario:{" "}
        <span className="sch__schedule-span">(Seleccione día(s) y hora)</span>
      </label>
      <div className="sch__table">
        {[
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
          "Domingo"
        ].map((day, i) => (
          <div className="sch__table-item" key={day}>
            <div className={`sch__table-item-day ${value[day] ? 'sch__table-item-dayCheck' : ''}`} >
              <label className='sch__label'>{day}</label>
              <input
                className="sch__inputDay"
                name={day}
                type="checkbox"
                checked={value[day]}
                onChange={handleInputChange}
              />
            </div>
          </div>

        ))}
        {[
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
          "Domingo"
        ].map((day, i) => (
          <div className="sch__selectors" key={i}>
            <div className="sch__selectors-container">
              <Select
                className=""
                contentClassName="sch__inputs-from sch__selectors-container-item"
                label="De:"
                nexTo={true}
                disabledSelect={!value[day]}
              />
              <Select
                contentClassName="sch__inputs-from sch__selectors-container-item"
                label="&nbsp;&nbsp;A:"
                nexTo={true}
                disabledSelect={!value[day]}
                options={[1, 2, 3, 4, 5]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
