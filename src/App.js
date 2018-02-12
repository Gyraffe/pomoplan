import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import * as R from "./constants/routes"
import HomeNoUser from "./scenes/Login/index"
import HomeUser from "./scenes/Home/index"
import {Container} from "reactstrap"
import {UserIsNotAuthenticated, UserIsAuthenticated} from "./firebase/authCheck"
import Navigation from "./scenes/Navigation"
import Pomodoro from "./scenes/Pomodoro/index"
import styled from "styled-components"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {[R.STATS, R.START_POMO, R.PLAN_WEEK, R.TODAY_VIEW].map(path =>
                        <Route path={path} key={path} component={UserIsAuthenticated(Navigation)}/>
                    )}
                <MainContainer>
                    <Route path={R.LOGIN} component={UserIsNotAuthenticated(HomeNoUser)}/>
                    <Route exact path={R.HOME} component={UserIsAuthenticated(HomeUser)}/>
                    <Route exact path={R.START_POMO} component={UserIsAuthenticated(Pomodoro)}/>
                </MainContainer>
                </div>
            </BrowserRouter>
        )
    }
}

export default App

const MainContainer = styled(Container)`
    height: inherit;
    width: inherit;
`