import React from "react";
import { Select } from "../inputs/Select";

export const Schedule = ({ special = false }) => {
  return (
    <div className="sch__container">
      <label className="sch__schedule">
        Horario: <span className="sch__schedule-span">(Seleccione día(s) y hora)</span>
      </label>
      <table className="sch__table">
        <thead className="sch__table-days">
          <tr className="sch__table-days-items">
            {[
              "Lunes",
              "Martes",
              "Miercoles",
              "Jueves",
              "Viernes",
              "Sabado",
              "Domingo"
            ].map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="sch__time">
            {[1, 2, 3, 4, 5, 6, 7].map(i => (
              <td className="sch__selectors">
                <Select
                  contentClassName="sch__inputs-from"
                  label="De:"
                  nexTo={true}
                />
                <Select
                  contentClassName="sch__inputs-to"
                  label="A:"
                  nexTo={true}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

{
  /* <div className="sch__time">
  <div className="sch__selectors">
    <Select
      contentClassName="sch__inputs-from"
      label="De:"
      nexTo={true}
    />
    <Select contentClassName="sch__inputs-to" label="A:" nexTo={true} />
  </div>
</div> */
}
