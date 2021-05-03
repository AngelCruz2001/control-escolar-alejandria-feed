import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { CheckPayment } from '../../components/payments/CheckPayment'
import { Deposit } from '../../components/payments/Deposit'
import { MakePay } from '../../components/payments/MakePay'
import { PaymentsScreen } from '../../components/payments/PaymentsScreen'

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
