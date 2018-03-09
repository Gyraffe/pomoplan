import React from "react"
import PropTypes from "prop-types"
import {DayHeader, DayNumber, GridSquare} from "./styles"
import Icon from "../../../styles/Icon"

const CalendarDay = ({dayNumber, moment, isToday, isSelected, selectDay}) => {
    console.log(isSelected)
    return (
        <GridSquare isSelected={isSelected} onClick={() => selectDay()}>
            <DayHeader>
                <DayNumber>
                    {dayNumber}
                </DayNumber>
                <div>
                    {isToday ? <Icon icon={"today"} accent/> : ""}
                </div>
            </DayHeader>
        </GridSquare>
    )
}

CalendarDay.propTypes = {
    dayNumber: PropTypes.number.isRequired,
    moment: PropTypes.object.isRequired,
    isToday: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    selectDay: PropTypes.func.isRequired,
}

export default CalendarDay