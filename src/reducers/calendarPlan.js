import moment from "moment"
import {getDate} from "../utils/date"

export const types = {
    SHOW_NEXT_MONTH: 'SHOW_NEXT_MONTH',
    SHOW_PREV_MONTH: 'SHOW_PREV_MONTH',
    SELECT_DAY: 'SELECT_DAY'
}

const initialState = {
    currentDateSelected: getDate(),
    currentMomentDisplayed: moment()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_NEXT_MONTH:{
            return {
                ...state,
                currentMomentDisplayed: moment(state.currentMomentDisplayed).add(1, 'month')
            }
        }
        case types.SHOW_PREV_MONTH:
            return {
                ...state,
                currentMomentDisplayed: moment(state.currentMomentDisplayed).subtract(1, 'month')
            }
        case types.SELECT_DAY:
            return {
                ...state,
                currentDateSelected: getDate(action.moment)
            }
        default:
            return state
    }
}

export const actions = {
    showNextMonth: () => ({type: types.SHOW_NEXT_MONTH}),
    showPrevMonth: () => ({type: types.SHOW_PREV_MONTH}),
    selectDay: (moment) => ({type: types.SELECT_DAY, moment})
}