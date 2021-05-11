import React, { useEffect } from 'react'
import { BackTexturePayments } from '../ui/BackTexturePayments'
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { ChangedRouterPay } from './router/ChangedRouterPay';
import { MakePay } from './makePay/MakePay';
import { FertilizerPay } from './FertilizerPay';
import { CheckStatePay } from './CheckStatePay';
import { useDispatch } from 'react-redux';
import { setActivePay } from '../../actions/pay';

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
                        <Redirect to="/pagos/pagar" />
                    </Switch>
                </div>

                <BackTexturePayments />
            </div>
        </>

    )
}
