import React from "react"
import {DayName, DayNames} from "./styles"
import moment from "moment"

const Day = props => (<DayName>{props.day}</DayName>)

const WeekDays = () => {
    let days = []
    for (let dayNumber = 0; dayNumber < 7; dayNumber++){
        days.push(<Day key={dayNumber} day={moment().weekday(dayNumber).format("dddd")} />)
    }
    return (
        <DayNames>
            {days}
        </DayNames>
    )
}

export default WeekDays