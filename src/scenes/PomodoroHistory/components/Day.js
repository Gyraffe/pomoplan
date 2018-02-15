import React from 'react'
import DayPomos from "./DayPomos"
import DayTitle from "./DayTitle"
import PropTypes from 'prop-types'

const Day = ({day, pomos, time}) => {
    return (
        <div>
            <DayTitle day={day} pomos={pomos} time={time}/>
            <DayPomos/>
        </div>
    )
}

Day.propTypes = {
    day: PropTypes.string.isRequired,
    pomos: PropTypes.string,
    time: PropTypes.string
}


export default Day