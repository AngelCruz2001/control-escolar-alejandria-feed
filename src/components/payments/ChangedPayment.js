import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const ChangedPayment = () => {
    return (
        <>
            <div className={`payment__sectionsChangedItem payment__activeText`}>
                <NavLink
                    exact
                    to="/pago"
                    activeClassName="active"
                >
                 Realizar Pago
                </NavLink>
                <hr />
            </div>
            <div className={`payment__sectionsChangedItem`}>
                <NavLink
                    exact
                    to="/consulta"
                    activeClassName="active"
                >
                    Consultar estado
                </NavLink>
                <hr />
            </div>
            <div className={`payment__sectionsChangedItem`}>
                <NavLink
                    exact
                    to="/abonos"
                    activeClassName="active"
                >
                    Abonos
                </NavLink>
                <hr />
            </div>
        </>
    )
}
