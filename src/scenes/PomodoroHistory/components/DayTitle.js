import React from 'react'
import PropTypes from 'prop-types'
import {DayHeader, DayName, PomoCount, TimeCount} from "./styles"

const DayTitle = ({day, pomos, time}) => {
    return(
        <DayHeader>
            <DayName>{day}</DayName>
            <PomoCount>{pomos}</PomoCount>
            <TimeCount>{time}</TimeCount>
        </DayHeader>
    )
}

DayTitle.propTypes = {
    day: PropTypes.string.isRequired,
    pomos: PropTypes.string,
    time: PropTypes.string
}

export default DayTitle