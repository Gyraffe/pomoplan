import {Calendar, CalendarTitle} from './styles'
import React from "react"
import DisplayMonth from "../containers/DisplayMonth"
import CalendarGrid from "./CalendarGrid"

export default () => {
    return (
        <Calendar>
            <CalendarTitle>calendar</CalendarTitle>
            <DisplayMonth/>
            <CalendarGrid/>
        </Calendar>
    )
}