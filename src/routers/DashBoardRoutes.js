import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FeedScreen } from '../components/feed/FeedScreen'
import { Personal } from '../components/forms/Personal'
import { Students } from '../components/forms/Students'
import { Teachers } from '../components/forms/Teachers'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRoutes = ({ history }) => {

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/estudiantes" component={Students} />
                <Route exact path="/docentes" component={Teachers} />
                <Route exact path="/personal" component={Personal} />
                <Route exact path="/main" component={FeedScreen} />
                <Redirect to="/main" />
            </Switch>
        </>
    )
}