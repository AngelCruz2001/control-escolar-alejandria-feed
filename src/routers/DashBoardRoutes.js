import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FeedScreen } from '../components/feed/FeedScreen'
import { Students } from '../components/forms/Students'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRoutes = ({history}) => {

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/students" component={Students} />
                <Route exact path="/main" component={FeedScreen} />
                <Redirect to="/main" />
            </Switch>
        </>
    )
}