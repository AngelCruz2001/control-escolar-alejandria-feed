import React from "react";
import { Bars } from "../ui/icons/Bars";
import { CheckStatusRow } from "../ui/payments/CheckStatusRow";
import { FilterOptionsBar } from "../ui/payments/FilterOptionsBar";
import { Separator } from "../ui/Separator";

export const CheckPayment = () => {
  return (
    <div className="pay__check">
      <div className="pay__search">
        <div className="pay__search-input">
          <input placeholder="Buscar" />
          <i className="fas fa-search pay__search-input-search"></i>
        </div>
        <button className="pay__search-input-filter">
          <i className="fas fa-filter"></i>
        </button>
        <FilterOptionsBar className="pay__search-nav"/>
      </div>

      <div className="pay__table_container">
        <table className="pay__table">
          <thead>
            <tr className="pay__table-space">
              <th className="pay__table-groups">Todos los Grupos</th>
              <th className="pay__table-total">Total</th>
              <th className="pay__table-totalPaid">
                <div className="pay__table-totalPaid-text">
                  Total <br/>
                  Pagado
                </div>
                {/* <Bars /> */}
                <Bars className="pay__table-totalPaid-bar"/>
              </th>
              <th className="pay__table-owe">
                <div className="pay__table-owe-text">
                  <p>Total </p>
                  <p>Adeudo</p>
                </div>
                <Bars />
              </th>
              <th className="pay__table-view"></th>
            </tr>
          </thead>

          <tbody>
            <CheckStatusRow />
            <CheckStatusRow />
            <CheckStatusRow />
            <CheckStatusRow />
     

          </tbody>
        </table>
      </div>
    </div>
  );
};
