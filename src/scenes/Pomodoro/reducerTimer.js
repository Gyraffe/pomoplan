import * as A from '../../constants/actionTypes'

const initialState = {
    isOn: false,
}

function timer(state = initialState, action) {
    switch (action.type) {
        case A.TIMER_DID_START:
            return {
                ...state,
                isOn: !state.isOn,
                startedOn: action.timeInMilliseconds,
                seconds: action.seconds,
                minutes: action.minutes
            }
        case A.TIMER_DID_STOP:
            return{
                ...state,
                isOn: !state.isOn
            }
        case A.TIMER_DID_FINISH:
            return {
                ...state,
                isOn: false
            }
        case A.TIMER_DID_UPDATE:{
            return {
                ...state,
                seconds: action.seconds,
                minutes: action.minutes
            }
        }
        default:
            return state
    }
}

export default timer