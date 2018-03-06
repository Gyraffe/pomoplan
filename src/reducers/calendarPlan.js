import moment from "moment"

export const types = {
    SHOW_NEXT_MONTH: 'SHOW_NEXT_MONTH',
    SHOW_PREV_MONTH: 'SHOW_PREV_MONTH',
}

const initialState = {
    currentDateSelected: undefined,
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
        default:
            return state
    }
}

export const actions = {
    showNextMonth: () => ({type: types.SHOW_NEXT_MONTH}),
    showPrevMonth: () => ({type: types.SHOW_PREV_MONTH})
}