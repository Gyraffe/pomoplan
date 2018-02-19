import {actions} from './reducers/timer'

function calculatePendingActions(state) {
    let { timer } = state;
    let actionArray = [];
    if (timer.isOn && (new Date()).getTime() - timer.startedOn > 25*60*1000) {
        actionArray.push(actions.timerDidFinish());
    }
    else if (timer.isOn){
        actionArray.push(actions.updateTimer(timer.startedOn))
    }
    return actionArray;
}

export default calculatePendingActions
