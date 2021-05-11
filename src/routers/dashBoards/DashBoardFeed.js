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
                <Route exact path="/capturacion/estudiantes" component={Students} />
                <Route exact path="/capturacion/docentes" component={Teachers} />
                <Route exact path="/capturacion/personal" component={Personal} />
                <Route exact path="/capturacion/grupos" component={Groups} />
                <Route exact path="/capturacion/campus" component={Campus} />
                <Route exact path="/capturacion/materia" component={Subject} />
                <Route exact path="/capturacion/carrera" component={Major} />
                <Route exact path="/capturacion/beca" component={Scholarship} />
                <Route exact path="/capturacion" component={FeedScreen} />

                <Redirect to="/capturacion" />
            </Switch>
        </>
    )
}
