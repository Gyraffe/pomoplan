import React from 'react'
import DailyStats from "../components/DailyStats"
import {connect} from "react-redux"
import {getAllPomodoroTime} from "../../../utils/pomodoroTime"
import {getLeftProjects, getTodayLeftTags, getTodayLeftPomo} from "../../../selectors/calendar"

const LeftToday = props => {
    return (
        <DailyStats status={'left'} {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        time: getTodayLeftPomo(state) ? getAllPomodoroTime(getTodayLeftPomo(state)) : '0',
        countPomos: getTodayLeftPomo(state) ? getTodayLeftPomo(state) : 0,
        tags: getTodayLeftTags(state),
        projects: getLeftProjects(state)
    }
}

export default connect(mapStateToProps)(LeftToday)