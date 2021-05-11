import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PaymentsScreen } from '../components/payments/PaymentsScreen'

import { Navbar } from '../components/ui/Navbar'
import { HelloWorld } from '../HelloWorld'
import { DashBoardFeed } from './dashBoards/DashBoardFeed'
import { DashBoardPayment } from './dashBoards/DashBoardPayment'

export const DashBoardRoutes = ({ history }) => {
    console.log("Main")
    return (
        <>
            <Navbar history={history} />
            <Switch>
                <Route path="/capturacion" component={DashBoardFeed} />
                <Route path="/pagos" component={DashBoardPayment} />
                <Route path="/main" component={DashBoardPayment} />
                <Redirect to="/main" />

            </Switch>
        </>
    )
}