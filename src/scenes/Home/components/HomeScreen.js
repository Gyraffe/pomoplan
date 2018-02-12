import React from 'react'
import {MenuOption} from './MenuOption'
import {Row} from "reactstrap"
import * as PATH from '../../../constants/routes'
import {EntryText, HomeScreenQuestion, HomeScreenTitle} from "./styles"
import PropTypes from 'prop-types'

const HomeScreen = ({username}) => {
    return (
        <Row className={"justify-content-md-center align-items-center"}>
            <EntryText className={"my-md-5"} xs={"12"}>
                <HomeScreenTitle>{"Hello, "}{username}{"!"}</HomeScreenTitle><br/>
                <HomeScreenQuestion>{"What do you want to do now?"}</HomeScreenQuestion>
            </EntryText>
            <MenuOption path={PATH.TODAY_VIEW} important>{'view today'}</MenuOption>
            <MenuOption path={PATH.START_POMO} expand>{'start pomo'}</MenuOption>
            <MenuOption path={PATH.PLAN_WEEK} expand>{'plan week'}</MenuOption>
            <MenuOption path={PATH.STATS} expand>{'see stats'}</MenuOption>
        </Row>
    )
}

HomeScreen.propTypes = {
    username: PropTypes.string.isRequired
}

export default HomeScreen