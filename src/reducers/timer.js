import {getBreakMinutes, getPomodoroMinutes, getTimerSeconds} from "../utils/pomodoroTime"
import {getCurrentUnixTime} from "../utils/date"

export const types = {
    TIMER_DID_START: 'TIMER_DID_START',
    TIMER_DID_DELETE: 'TIMER_DID_DELETE',
    TIMER_DID_FINISH: 'TIMER_DID_FINISH',
    TIMER_DID_UPDATE: 'TIMER_DID_UPDATE',
    BREAK_IS_ON: 'BREAK_IS_ON',
    BREAK_DID_FINISH: 'BREAK_DID_FINISH',
}

const initialState = {
    breakIsOn: false,
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
                startedOn: getCurrentUnixTime(),
            }
        case types.BREAK_DID_FINISH:
        case types.TIMER_DID_DELETE:
            return {
                ...state,
                isOn: false,
                breakIsOn: false,
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
            if (!state.breakIsOn) {
                return {
                    ...state,
                    seconds: getTimerSeconds(action.milliseconds),
                    minutes: getPomodoroMinutes(action.milliseconds)
                }
            }
            else {
                return {
                    ...state,
                    seconds: getTimerSeconds(action.milliseconds),
                    minutes: getBreakMinutes(action.milliseconds)
                }
            }
        }
        case types.BREAK_IS_ON: {
            return {
                ...state,
                breakIsOn: true,
                startedOn: getCurrentUnixTime(),
                seconds: 0,
                minutes: 5,
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
    startBreak: () => ({type: types.BREAK_IS_ON}),
    finishBreak: () => ({type: types.BREAK_DID_FINISH}),
}
