import React from "react";
import { Separator } from "../ui/Separator";

export const Deposit = () => {
  return (
    <div className="deposit__makeDeposit">
      <div className="deposit__date">
        <p href="" className="deposit__subtitleSection">
          Fecha
        </p>
        <div className="deposit__dateData">
          <p>15 - junio - 2021</p>
        </div>
      </div>
      <div className="deposit__forms deposit__information">
        <div className="deposit__formSection">
          <div className="deposit__titleSection">
            <p>MATRÍCULA</p>
            <input
              className="deposit__inputData"
              type="text"
              placeholder="0000000000000"
            />
          </div>
        </div>
        <div className="deposit__studentInfo">
          <p>Informacion del alumno</p>
          <p>
            {" "}
            <strong>Alumno: </strong> Harry Eduard Sltyles
          </p>
          <p>
            {" "}
            <strong>Grupo: </strong>Grupo Ejemplo
          </p>
          <p>
            {" "}
            <strong>CAMPUS: </strong>campus ejemplo
          </p>
          <p>
            {" "}
            <strong>Carrera: </strong>carrera correspondiente
          </p>
          <p></p>
        </div>
      </div>
      <div className="deposit__table">
        <table className="deposit__table-container">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Concepto</th>
              <th>Costo</th>
              <th>Anticipo</th>
              <th>Restante</th>
              <th></th>
            </tr>
            <tr className="check__tableDescription-container-table-line"></tr>
          </thead>
          <tbody>
            <tr>
              <td className="deposit__tableTitle">Junio - 13 - 2021</td>
              <td className="deposit__tableTitle">
                Materia Ejemplo Licenciatura
              </td>
              <td className="deposit__tableAmount">$7000</td>
              <td className="deposit__tableAmount">$0000000</td>
              <td className="deposit__tableAmount">$0000000</td>
              <td>
                Liquidar o abonar <i className="fas fa-chevron-right"></i>
              </td>
            </tr>
            <tr>
              <td className="deposit__tableTitle">Junio - 13 - 2021</td>
              <td className="deposit__tableTitle">
                Materia Ejemplo Licenciatura
              </td>
              <td className="deposit__tableAmount">$7000</td>
              <td className="deposit__tableAmount">$0000000</td>
              <td className="deposit__tableAmount">$0000000</td>
              <td>
                Liquidar o abonar <i className="fas fa-chevron-right"></i>
              </td>
            </tr>
            <tr>
              <td className="deposit__tableTitle">Junio - 13 - 2021</td>
              <td className="deposit__tableTitle">
                Materia Ejemplo Licenciatura
              </td>
              <td className="deposit__tableAmount">$7000</td>
              <td className="deposit__tableAmount">$0000000</td>
              <td className="deposit__tableAmount">$0000000</td>
              <td>
                Liquidar o abonar <i className="fas fa-chevron-right"></i>
              </td>
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
      </div>
    </div>
  );
};
