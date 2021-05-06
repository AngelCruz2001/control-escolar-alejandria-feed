import React from "react";
import { Separator } from "../Separator";
import { TableDescriptionStatus } from "./TableDescriptionStatus";

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

      <TableDescriptionStatus />
    </tbody>
  );
};
