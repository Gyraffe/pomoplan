import {createSelector} from "reselect"
import moment from "moment"

export const getCurrentMoment = state => state.calendarPlan.currentMomentDisplayed

export const getMonthToDisplay = createSelector(
    getCurrentMoment,
    (stateMoment) => moment().isSame(stateMoment, 'year') ?
        stateMoment.format("MMMM")
        : stateMoment.format("MMMM YYYY")
)