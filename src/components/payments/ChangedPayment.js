import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

export const ChangedPayment = () => {
    const history = useHistory();
    console.log(history.location.pathname)
    return (
        <>
            <div className={`payment__sectionsChangedItem `}>
                <NavLink
                    exact
                    to="/pagos/pago"
                    activeClassName="payment__activeText"
                >
                    Realizar Pago
                </NavLink>
                <hr />
            </div>
            <div className={`payment__sectionsChangedItem`}>
                <NavLink
                    exact
                    to="/pagos/consulta"
                    activeClassName="payment__activeText"
                >
                    Consultar estado
                </NavLink>
                <hr />
            </div>
            <div className={`payment__sectionsChangedItem`}>
                <NavLink
                    exact
                    to="/pagos/abonos"
                    activeClassName="payment__activeText"
                >
                    Abonos
                </NavLink>
                <hr />
            </div>
        </>
    )
}
