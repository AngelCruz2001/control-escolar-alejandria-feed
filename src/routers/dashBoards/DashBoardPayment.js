import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PaymentsScreen } from '../../components/payments/PaymentsScreen'
import { BackTexturePayments } from '../../components/ui/BackTexturePayments';

export const DashBoardPayment = () => {
    console.log("Payments")
    return (
        <>
            <Switch>
                <Route path="/pagos" component={PaymentsScreen} />
                <Redirect to="/pagos" />
            </Switch>

        </>
    )
}
