import React from 'react'
import PropTypes from 'prop-types'
import {DateDisplay, DayHeader, DayName, PomoCount, TimeCount} from "./styles"
import {getDayAndMonthString, getCalendarDay} from "../../../utils/date"

const DayTitle = ({day, pomos, time}) => {
    return (
        <DayHeader>
            <DayName>{getCalendarDay(day)}
                <DateDisplay>{"(" + getDayAndMonthString(day) + ")"}</DateDisplay>
            </DayName>
            <PomoCount>{pomos}</PomoCount>
            <TimeCount>{time}</TimeCount>
        </DayHeader>
    )
}

DayTitle.propTypes = {
    day: PropTypes.string.isRequired,
    pomos: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired
}

export default DayTitle