import {getPomodoroMinutes, getPomodoroSeconds} from "../utils/pomodoroTime"
import {getCurrentTime} from "../utils/date"

export const types = {
    TIMER_DID_START: 'TIMER_DID_START',
    TIMER_DID_DELETE: 'TIMER_DID_DELETE',
    TIMER_DID_FINISH: 'TIMER_DID_FINISH',
    TIMER_DID_UPDATE: 'TIMER_DID_UPDATE',
}

const initialState = {
    isOn: false,
    seconds: 0,
    minutes: 25,
    startedOn: undefined,
    hasFinished: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.TIMER_DID_START:
            return {
                ...state,
                isOn: !state.isOn,
                startedOn: getCurrentTime(),
            }
        case types.TIMER_DID_DELETE:
            return {
                ...state,
                isOn: false,
                seconds: 0,
                minutes: 25,
                startedOn: undefined,
                hasFinished: false
            }
        case types.TIMER_DID_FINISH:
            return {
                ...state,
                hasFinished: true
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
    timerDidDelete: () => ({type: types.TIMER_DID_DELETE}),
    updateTimer: (milliseconds) => ({type: types.TIMER_DID_UPDATE, milliseconds}),
}
