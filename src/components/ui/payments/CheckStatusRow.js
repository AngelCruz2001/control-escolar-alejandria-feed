import React from "react";
import { Separator } from "../Separator";

export const CheckStatusRow = () => {
  const styles = {
    height: "10px"
  };

  return (
    <tbody>
      <tr>
        <td className="pay__table-groups-content">
          Carrera o maestria - Grupo ejemplo
        </td>
        <td className="pay__table-total-content">$90999999</td>
        <td className="pay__table-totalPaid-content">$90999999</td>
        <td className="pay__table-owe-content">$90999999</td>
        <td className="pay__table-view-content">
          <button>
            <i className="fas fa-eye pay__table-view-content-icon"></i>
          </button>
        </td>
      </tr>
      <tr style={styles}></tr>

      <tr>
        <td className="pay__table-groups-content">
          Carrera o maestria - Grupo ejemplo
        </td>
        <td className="pay__table-total-content">$90999999</td>
        <td className="pay__table-totalPaid-content">$90999999</td>
        <td className="pay__table-owe-content">$90999999</td>
        <td className="pay__table-view-content">
          <button>
            <i className="fas fa-eye pay__table-view-content-icon"></i>
          </button>
        </td>
      </tr>
      <tr style={styles}></tr>
{/* 
      <tr className="check__tableDescription">
        <td className="check__tableDescription-container">
        <table className="check__tableDescription-container-table">
          <thead>
            <tr>
              <th>Mes</th>
              <th>Concepto</th>
              <th>Estado</th>
              <th>Costo</th>
              <th>Pagado</th>
              <th>Debe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Junio - 13 - 2021</td>
              <td>Materia Ejemplo Licenciatura</td>
              <td>Pagado</td>
              <td>$0000000</td>
              <td>$0000000</td>
              <td>$0000000</td>
            </tr>
          </tbody>
        </table>
        </td>
      </tr> */}
    </tbody>
  );
};
