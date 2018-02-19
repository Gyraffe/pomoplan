import React from 'react'
import DailyStats from "../components/DailyStats"
import {connect} from "react-redux"
import {getAllPomodoroTime} from "../../../utils/pomodoroTime"

const LeftToday = props => {
    return (
        <DailyStats status={'left'} {...props}/>
    )
}

const mapStateToProps = state => {
    const today = Object.keys(state.todos)
    return {
        timeLeft: today ? getAllPomodoroTime(today.length) : '0',
        countPomos: today ? today.length : 0,
    }
}

export default connect(mapStateToProps)(LeftToday)