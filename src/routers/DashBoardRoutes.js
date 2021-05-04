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
                <Route path="/capturación" component={DashBoardFeed} />
                <Route path="/pagos" component={DashBoardPayment} />
                <Route exact path="/main" component={DashBoardPayment} /> 
                {/* HelloWorld */}

                <Redirect to="/main" />

            </Switch>
        </>
    )
}