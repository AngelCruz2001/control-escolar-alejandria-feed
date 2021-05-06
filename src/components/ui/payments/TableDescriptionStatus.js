import React from "react";

export const TableDescriptionStatus = () => {
  return (
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
            <tr className="check__tableDescription-container-table-line"></tr>
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
            <tr>
              <td>Junio - 13 - 2021</td>
              <td>Materia Ejemplo Licenciatura</td>
              <td>Pagado</td>
              <td>$0000000</td>
              <td>$0000000</td>
              <td>$0000000</td>
            </tr>
            <tr>
              <td>Junio - 13 - 2021</td>
              <td>Materia Ejemplo Licenciatura</td>
              <td>Pagado</td>
              <td>$0000000</td>
              <td>$0000000</td>
              <td>$0000000</td>
            </tr>
          </tbody>
          <tfoot>
              <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Ver más</th>
              </tr>
          </tfoot>
        </table>
      </td>
    </tr>
  );
};
