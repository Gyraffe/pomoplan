import React from "react"
import {Break} from "./styles"
import CalendarDay from "./CalendarDay"
// import moment from "moment"
import BlankCalendarDay from "./BlankCalendarDay"
import uniqid from "uniqid"
import moment from "moment"

const CalendarDays = ({currentMoment}) => {
    return GetDaysGrid(currentMoment)
}

export default CalendarDays

function GetDaysGrid(currentMoment) {
    let daysToDisplay = []
    let breakCount = 0
    breakCount = PushEmptyDaysBefore(currentMoment, breakCount, daysToDisplay)
    breakCount = PushCalendarDays(currentMoment, breakCount, daysToDisplay)
    PushEmptyDaysAfter(currentMoment, breakCount, daysToDisplay)
    return daysToDisplay
}

function getMoment(monthDay, givenMoment) {
    return moment(givenMoment).date(monthDay)
}

function getFirstDaysDifference(givenMoment) {
    return moment(givenMoment).startOf("month").weekday()
}

function getLastDaysDifference(givenMoment) {
    return 6 - moment(givenMoment).endOf("month").weekday()
}


function PushCalendarDays(currentMoment, breakCount, daysToDisplay) {
    for(let day = 1; day <= moment(currentMoment).daysInMonth(); day++, breakCount++) {
        if(breakCount % 7 === 0) {
            daysToDisplay.push(<Break key={uniqid()}/>)
        }
        daysToDisplay.push(<CalendarDay key={uniqid()}
                                        dayNumber={day}
                                        moment={getMoment(day, currentMoment)}
                                        isToday={getMoment(day, currentMoment).isSame(moment(), 'day')}
        />)
    }
    return breakCount
}

function PushEmptyDaysBefore(currentMoment, breakCount, daysToDisplay) {
    for(let emptyDayBefore = 0; emptyDayBefore < getFirstDaysDifference(currentMoment); emptyDayBefore++, breakCount++) {
        if(breakCount % 7 === 0) {
            daysToDisplay.push(<Break key={uniqid()}/>)
        }
        daysToDisplay.push(<BlankCalendarDay key={uniqid()}/>)
    }
    return breakCount
}

function PushEmptyDaysAfter(currentMoment, breakCount, daysToDisplay) {
    for(let emptyDayAfter = 0; emptyDayAfter < getLastDaysDifference(currentMoment); emptyDayAfter++, breakCount++) {
        if(breakCount % 7 === 0) {
            daysToDisplay.push(<Break key={uniqid()}/>)
        }
        daysToDisplay.push(<BlankCalendarDay key={uniqid()}/>)
    }
}
