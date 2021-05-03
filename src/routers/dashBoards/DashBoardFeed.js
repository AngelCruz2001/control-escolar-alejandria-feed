import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { FeedScreen } from '../../components/feed/FeedScreen'
import { Campus } from '../../components/forms/Campus'
import { Groups } from '../../components/forms/Groups'
import { Major } from '../../components/forms/Major'
import { Personal } from '../../components/forms/Personal'
import { Scholarship } from '../../components/forms/Scholarship'
import { Students } from '../../components/forms/Students'
import { Subject } from '../../components/forms/Subject'
import { Teachers } from '../../components/forms/Teachers'

import { panelClearData } from '../../actions/panel'

export const DashBoardFeed = () => {
    console.log("Feed")
    const dispatch = useDispatch()
    dispatch(panelClearData())
    return (
        <>
            <Switch>
                <Route exact path="/capturación/estudiantes" component={Students} />
                <Route exact path="/capturación/docentes" component={Teachers} />
                <Route exact path="/capturación/personal" component={Personal} />
                <Route exact path="/capturación/grupos" component={Groups} />
                <Route exact path="/capturación/campus" component={Campus} />
                <Route exact path="/capturación/materia" component={Subject} />
                <Route exact path="/capturación/carrera" component={Major} />
                <Route exact path="/capturación/beca" component={Scholarship} />
                <Route exact path="/capturación/main" component={FeedScreen} />

                <Redirect to="/capturación/main" />
            </Switch>
        </>
    )
}
