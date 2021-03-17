import React from "react";
import { Select } from "../inputs/Select";

export const Schedule = ({ special = false }) => {

  const handleClick = () => {
    alert('Para más información, acuda a recepción.');
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
          <div className="sch__table-item">
            <div onClick={handleClick} className="sch__table-item-day" key={i}>
              {day}
            </div>
          </div>
        ))}
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div className="sch__selectors">
            <div className="sch__selectors-container">
              <Select
                className=""
                contentClassName="sch__inputs-from sch__selectors-container-item"
                label="De:"
                nexTo={true}
              />
              <Select
                contentClassName="sch__inputs-from sch__selectors-container-item"
                label="&nbsp;&nbsp;A:"
                nexTo={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
