import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { BackTexturePayments } from '../ui/BackTexturePayments'
import { ChangedPayment } from './ChangedPayment'
import { CheckPayment } from './CheckPayment'
import { Deposit } from './Deposit'
import { MakePay } from './MakePay'

export const PaymentsScreen = () => {
    return (
        <div className="containerPayments">
            <div className="payment__sectionsChanged">
                <ChangedPayment />
            </div>
            <div className="overTexturePayments">
                <Switch>
                    <Route exact path="/pagos/pago" component={MakePay} />
                    <Route exact path="/pagos/consulta" component={CheckPayment} 
                    className="overTexturePayments-status"
                    />
                    <Route exact path="/pagos/abonos" component={Deposit} />
                    <Redirect to="/pagos/pago" />
                </Switch>
            </div>
            <BackTexturePayments />
        </div>
    )
}
