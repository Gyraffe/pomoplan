import {actions} from './reducers/timer'
import moment from 'moment'

function calculatePendingActions(state) {
    let {timer} = state
    let actionArray = []
    if(timer.isOn && !timer.hasFinished && (moment().valueOf() - timer.startedOn > moment.duration(2, 'seconds'))) {
        actionArray.push(actions.timerDidFinish())
    }
    else if(timer.breakIsOn && (moment().valueOf() - timer.startedOn > moment.duration(5, 'seconds'))) {
        actionArray.push(actions.finishBreak())
    }
    else if((timer.isOn || timer.breakIsOn) && !timer.hasFinished) {
        actionArray.push(actions.updateTimer(timer.startedOn))
    }

    return actionArray
}

export default calculatePendingActions
