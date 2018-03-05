import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import * as R from "./constants/routes"
import Login from "./scenes/Login/index"
import HomeUser from "./scenes/Home/index"
import {Container} from "reactstrap"
import {UserIsNotAuthenticated, UserIsAuthenticated} from "./firebase/authCheck"
import Navigation from "./scenes/Navigation"
import Pomodoro from "./scenes/Pomodoro/index"
import styled from "styled-components"
import calculatePendingActions from "./pendingActions"
import store from "./store/store"
import Plan from "./scenes/Plan"


class App extends Component {
    componentDidMount(){
        setInterval(() => {
            let actions = calculatePendingActions(store.getState())
            actions.forEach(store.dispatch);
        }, 1000)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    {[R.STATS, R.START_POMO, R.PLAN_WEEK, R.ACCOUNT].map(path =>
                        <Route path={path} key={path} component={UserIsAuthenticated(Navigation)}/>
                    )}
                <MainContainer>
                    <Route path={R.LOGIN} component={UserIsNotAuthenticated(Login)}/>
                    <Route exact path={R.HOME} component={UserIsAuthenticated(HomeUser)}/>
                    <Route exact path={R.START_POMO} component={UserIsAuthenticated(Pomodoro)}/>
                    <Route exact path={R.PLAN_WEEK} component={UserIsAuthenticated(Plan)}/>
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