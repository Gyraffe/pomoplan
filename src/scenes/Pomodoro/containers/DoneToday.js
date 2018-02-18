import React from 'react'
import DailyStats from "../components/DailyStats"
import {connect} from "react-redux"

const DoneToday = props => {
    return (
        <DailyStats status={'done'} {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        timeLeft: countPomosTime(state.pomoHistory[new Date().toISOString().split("T")[0]].length),
        countPomos: state.pomoHistory[new Date().toISOString().split("T")[0]].length,
    }
}

export default connect(mapStateToProps)(DoneToday)


const countPomosTime = (pomos) => {
    const hours = Math.floor((pomos * 30) / 60)
    const minutes = pomos * 30 - hours * 60
    return hours + ':' + (minutes === 0 ? '0' + minutes : minutes)
}