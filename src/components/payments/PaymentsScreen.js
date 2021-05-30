import React, { useEffect } from 'react'
import { BackTexturePayments } from '../ui/BackTexturePayments'
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { ChangedRouterPay } from './router/ChangedRouterPay';
import { MakePay } from './makePay/MakePay';
import { CheckStatePay } from './checkStatePay/CheckStatePay';
import { FertilizerPay } from './fertilizerPay/FertilizerPay';

export const PaymentsScreen = () => {
    return (
        <>
            <div className="pay__containerPay">
                <ChangedRouterPay />
                <div className="overTexturePay">
                    <Switch >
                        <Route path="/pagos/pagar" component={MakePay} />
                        <Route path="/pagos/estado" component={CheckStatePay} />
                        <Route path="/pagos/abono" component={FertilizerPay} />
                        <Redirect to="/pagos/abono" />
                    </Switch>
                </div>

                <BackTexturePayments />
            </div>
        </>

    )
}
