import React from 'react'
import DailyStats from "../components/DailyStats"
import {connect} from "react-redux"
import {getAllPomodoroTime} from "../../../utils/pomodoroTime"
import {getToday} from "../../../utils/date"
import {getDonePomos, getDoneProjects} from "../../../selectors/pomoHistory"
import {getDoneTags} from "../../../selectors/pomoHistory"

const DoneToday = props => {
    return (
        <DailyStats status={'done'} {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        time: getAllPomodoroTime(getDonePomos(state ,getToday())),
        countPomos: getDonePomos(state ,getToday()),
        tags: getDoneTags(state),
        projects: getDoneProjects(state)
    }
}

export default connect(mapStateToProps)(DoneToday)