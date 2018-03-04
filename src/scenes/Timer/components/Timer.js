import React from 'react'
import StartTimer from "../containers/StartTimer"
import CountingTimer from "../containers/CountingTimer"
import MarkTodos from "../containers/MarkTodos"
import DeletePomo from "../containers/DeletePomo"

const Timer = ({timerIsOn, breakIsOn, timerHasFinished, confirmationIsOn}) => {
    if (confirmationIsOn)
        return <DeletePomo/>
    else if(!timerHasFinished && (timerIsOn || breakIsOn))
        return <CountingTimer/>
    else if(timerHasFinished && timerIsOn)
        return <MarkTodos/>
    else if(!timerHasFinished && !timerIsOn)
        return (
        <StartTimer/>
    )
}

export default Timer