import {actions} from './reducers/timer'

function calculatePendingActions(state) {
    let { timer } = state;
    let actionArray = [];
    if (timer.isOn && !timer.hasFinished && (new Date()).getTime() - timer.startedOn > 2*1000) {
        actionArray.push(actions.timerDidFinish());
    }
    else if (timer.breakIsOn && (new Date()).getTime() - timer.startedOn > 4*1000){
        actionArray.push(actions.finishBreak())
    }
    else if ((timer.isOn || timer.breakIsOn) && !timer.hasFinished){
        actionArray.push(actions.updateTimer(timer.startedOn))
    }

    return actionArray;
}

export default calculatePendingActions
