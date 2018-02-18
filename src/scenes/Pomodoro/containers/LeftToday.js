import React from 'react'
import DailyStats from "../components/DailyStats"
import {connect} from "react-redux"

const LeftToday = props => {
    return (
        <DailyStats status={'left'} {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        timeLeft: countPomosTime(state.todos.length),
        countPomos: state.todos.length,
    }
}

export default connect(mapStateToProps)(LeftToday)


const countPomosTime = (pomos) => {
    const hours = Math.floor((pomos * 30) / 60)
    const minutes = pomos * 30 - hours * 60
    return hours + ':' + (minutes === 0 ? '0' + minutes : minutes)
}