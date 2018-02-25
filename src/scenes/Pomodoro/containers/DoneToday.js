import React from 'react'
import DailyStats from "../components/DailyStats"
import {connect} from "react-redux"
import {getAllPomodoroTime} from "../../../utils/pomodoroTime"
import {getToday} from "../../../utils/date"
import {getDonePomos} from "../../../selectors/pomoHistory"

const DoneToday = props => {
    return (
        <DailyStats status={'done'} {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        timeLeft: getAllPomodoroTime(getDonePomos(state ,getToday())),
        countPomos: getDonePomos(state ,getToday()),
    }
}

export default connect(mapStateToProps)(DoneToday)