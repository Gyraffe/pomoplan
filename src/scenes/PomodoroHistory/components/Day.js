import React from 'react'
import DayPomos from "./DayPomos"
import DayTitle from "./DayTitle"
import PropTypes from 'prop-types'

const Day = (props) => {
    return (
        <div>
            <DayTitle day={props.day} pomos={props.history.length} time={countPomosTime(props.history.length)}/>
            <DayPomos history={props.history}/>
        </div>
    )
}

Day.propTypes = {
    day: PropTypes.string.isRequired,
    history: PropTypes.array
}

export default Day

const countPomosTime = (pomos) => {
    const hours = Math.floor((pomos * 30) / 60)
    const minutes = pomos * 30 - hours * 60
    return hours + ':' + (minutes === 0 ? '0' + minutes : minutes)
}