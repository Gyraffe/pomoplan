import React from 'react'
import PropTypes from 'prop-types'
import {DateDisplay, DayHeader, DayName, PomoCount, TimeCount} from "./styles"

const DayTitle = ({day, pomos, time}) => {
    return (
        <DayHeader>
            <DayName>{(checkToday(day) && 'today') || getDayToDisplay(day)}
                <DateDisplay>{getDateToDisplay(day)}</DateDisplay>
            </DayName>
            <PomoCount>{pomos}</PomoCount>
            <TimeCount>{time}</TimeCount>
        </DayHeader>
    )
}

DayTitle.propTypes = {
    day: PropTypes.string.isRequired,
    pomos: PropTypes.number,
    time: PropTypes.string
}

export default DayTitle

const checkToday = (date) => {
    const previousDate = new Date(date)
    const todayDate = new Date()
    return previousDate.getFullYear() === todayDate.getFullYear()
        && previousDate.getMonth() === todayDate.getMonth()
        && previousDate.getDate() === todayDate.getDate()
}

const getDayToDisplay = (date) => {
    let day = new Date(date).getDay()
    switch (day) {
        case 0:
            day = 'monday'
            break
        case 1:
            day = 'tuesday'
            break
        case 2:
            day = 'wednesday'
            break
        case 3:
            day = 'thursday'
            break
        case 4:
            day = 'friday'
            break
        case 5:
            day = 'saturday'
            break
        case 6:
            day = 'sunday'
            break
        default:
            day = 'undefined'
    }
    return day
}

const getDateToDisplay = (date) => {
    const month = new Date(date).getMonth() + 1
    const monthToDisplay = month < 10 ? "0" + month : month
    const dayOfMonth = new Date(date).getDate()
    const dayOfMonthToDisplay = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth
    return "(" + dayOfMonthToDisplay + '.' + monthToDisplay + ")"
}