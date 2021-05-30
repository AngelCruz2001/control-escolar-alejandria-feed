import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const ChangedRouterPay = () => {
    return (
        <div className="change-router-pay" >
            <NavLink className="change-router-pay__link" to="/pagos/pagar" activeClassName="selected">
                Realizar pago
            </NavLink>
            <NavLink className="change-router-pay__link" to="/pagos/estado" activeClassName="selected" >
                Consultar estado
            </NavLink>
            <NavLink className="change-router-pay__link" to="/pagos/abono" activeClassName="selected">
                Abonos
            </NavLink>
        </div>
    )
}
