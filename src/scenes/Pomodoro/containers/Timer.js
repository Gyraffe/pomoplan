import React from 'react'
import {StartPomoButton} from "../components/styles"
import {actions} from '../../../reducers/timer'
import {connect} from "react-redux"
import PomoProgress from "../components/PomoProgress"
import {actions as action} from "../../../reducers/todoCards"

const Timer = props => {
    if(props.timerIsOn)
        return <PomoProgress onClick={props.stopTimer} minutes={props.minutes} seconds={props.seconds}/>
    return (
        <StartPomoButton onClick={props.startTimer}>
            START
        </StartPomoButton>
    )
}

const mapStateToProps = (state) => {
    return {
        timerIsOn: state.timer.isOn,
        timerStartedOn: state.timer.startedOn,
        minutes: state.timer.minutes,
        seconds: state.timer.seconds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startTimer: () => {
            dispatch(actions.timerDidStart())
        },
        stopTimer: () => {
            dispatch(actions.timerDidStop())
            dispatch(action.unmarkAllTodos())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)
