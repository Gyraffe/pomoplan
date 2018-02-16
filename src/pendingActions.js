import {timerDidFinish, updateTimer} from "./scenes/Pomodoro/containers/Timer"

function calculatePendingActions(state) {
    let { timer } = state;
    let actions = [];
    if (timer.isOn && (new Date()).getTime() - timer.startedOn > 25*60*1000) {
        actions.push(timerDidFinish());
    }
    else if (timer.isOn){
        actions.push(updateTimer(timer.startedOn))
    }
    return actions;
}

export default calculatePendingActions
