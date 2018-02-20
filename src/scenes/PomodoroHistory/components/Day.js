import React from 'react'
import DayPomos from "./DayPomos"
import DayTitle from "./DayTitle"
import PropTypes from 'prop-types'
import {getAllPomodoroTime} from "../../../utils/pomodoroTime"

const Day = ({day, dayHistory}) => {
    console.log(dayHistory)
    return (
        <div>
            <DayTitle day={day} pomos={dayHistory.length} time={getAllPomodoroTime(dayHistory.length)}/>
            <DayPomos dayHistory={dayHistory}/>
        </div>
    )
}

Day.propTypes = {
    day: PropTypes.string.isRequired,
    dayHistory: PropTypes.array
}

export default Day

