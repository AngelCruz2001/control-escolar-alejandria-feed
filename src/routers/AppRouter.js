import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch, Redirect
} from 'react-router-dom';
import { login } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { AuthRouter } from './AuthRouter';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = ({ history }) => {
    // const { logged } = useSelector(state => state.auth)
    const logged = true
    return (
        <Router>
            <main>
                <Switch>

                    <PublicRoute
                        exact
                        path="/auth/login"
                        isAuthenticated={logged}
                        component={AuthRouter}
                    />
                    <PrivateRoute
                        path="/"
                        component={DashBoardRoutes}
                        isAuthenticated={logged}
                    />

                </Switch>
            </main>
        </Router>
    )
}
