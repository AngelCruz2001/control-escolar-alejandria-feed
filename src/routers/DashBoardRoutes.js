import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { formsCleanErrors } from '../actions/forms'
import { FeedScreen } from '../components/feed/FeedScreen'
import { Campus } from '../components/forms/Campus'
import { Groups } from '../components/forms/Groups'
import { Major } from '../components/forms/Major'
import { Personal } from '../components/forms/Personal'
import { Scholarship } from '../components/forms/Scholarship'
import { Students } from '../components/forms/Students'
import { Subject } from '../components/forms/Subject'
import { Teachers } from '../components/forms/Teachers'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRoutes = ({ history }) => {
    return (
        <>
            <Navbar history={history} />
            <Switch>
                <Route exact path="/estudiantes" component={Students} />
                <Route exact path="/docentes" component={Teachers} />
                <Route exact path="/personal" component={Personal} />
                <Route exact path="/grupos" component={Groups} />
                <Route exact path="/campus" component={Campus} />
                <Route exact path="/materia" component={Subject} />
                <Route exact path="/carrera" component={Major} />
                <Route exact path="/beca" component={Scholarship} />
                <Route exact path="/main" component={FeedScreen} />
                <Redirect to="/main" />
            </Switch>
        </>
    )
}