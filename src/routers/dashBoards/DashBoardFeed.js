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
                <Route path="/capturacion/estudiantes" component={Students} />
                <Route path="/capturacion/docentes" component={Teachers} />
                <Route path="/capturacion/personal" component={Personal} />
                <Route path="/capturacion/grupos" component={Groups} />
                <Route path="/capturacion/campus" component={Campus} />
                <Route path="/capturacion/materia" component={Subject} />
                <Route path="/capturacion/carrera" component={Major} />
                <Route path="/capturacion/beca" component={Scholarship} />
                <Route exact path="/capturacion" component={FeedScreen} />

                <Redirect to="/capturacion" />
            </Switch>
        </>
    )
}
