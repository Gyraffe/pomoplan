import {createSelector} from "reselect"
import moment from "moment"

export const getCurrentMoment = state => state.calendarPlan.currentMomentDisplayed

export const getMonthToDisplay = createSelector(
    getCurrentMoment,
    (stateMoment) => moment().isSame(stateMoment, 'year') ?
        stateMoment.format("MMMM")
        : stateMoment.format("MMMM YYYY")
)

export const getCurrentDateDisplayed = createSelector(
    getCurrentMoment,
    (stateMoment) => stateMoment
)

export const getCurrentDateSelected = state => state.calendarPlan.currentDateSelected

export const isSelected = (state, ownProps) => moment(ownProps.moment)
    .isSame(moment(state.calendarPlan.currentDateSelected), 'day')
