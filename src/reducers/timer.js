import {getPomodoroMinutes, getPomodoroSeconds} from "../utils/pomodoroTime"
import {getCurrentTime} from "../utils/date"

export const types = {
    TIMER_DID_START: 'TIMER_DID_START',
    TIMER_DID_STOP: 'TIMER_DID_STOP',
    TIMER_DID_FINISH: 'TIMER_DID_FINISH',
    TIMER_DID_UPDATE: 'TIMER_DID_UPDATE',
}

const initialState = {
    isOn: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.TIMER_DID_START:
            return {
                ...state,
                isOn: !state.isOn,
                startedOn: getCurrentTime(),
                seconds: 0,
                minutes: 25
            }
        case types.TIMER_DID_STOP:
            return {
                ...state,
                isOn: !state.isOn
            }
        case types.TIMER_DID_FINISH:
            return {
                ...state,
                isOn: false
            }
        case types.TIMER_DID_UPDATE: {
            return {
                ...state,
                seconds: getPomodoroSeconds(action.milliseconds),
                minutes: getPomodoroMinutes(action.milliseconds)
            }
        }
        default:
            return state
    }
}

export const actions = {
    timerDidStart: () => ({type: types.TIMER_DID_START}),
    timerDidFinish: () => ({type: types.TIMER_DID_FINISH}),
    timerDidStop: () => ({type: types.TIMER_DID_STOP}),
    updateTimer: (milliseconds) => ({type: types.TIMER_DID_UPDATE, milliseconds})
}
