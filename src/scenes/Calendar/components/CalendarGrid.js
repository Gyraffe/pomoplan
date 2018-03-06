import React from 'react'
import {Grid, GridWrapper} from "./styles"
import WeekDays from "./WeekDays"
import DisplayGrid from "../containers/DisplayGrid"

const CalendarGrid = props => {
    return (
        <GridWrapper>
            <WeekDays/>
            <Grid>
                <DisplayGrid/>
            </Grid>
        </GridWrapper>
    )
}

export default CalendarGrid