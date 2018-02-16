import React from 'react'
import {TIMER_DID_START, TIMER_DID_FINISH, TIMER_DID_STOP, TIMER_DID_UPDATE} from '../../../constants/actionTypes'
import {StartPomoButton} from "../components/styles"
import {connect} from "react-redux"
import PomoProgress from "../components/PomoProgress"

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
            dispatch(timerDidStart())
        },
        stopTimer: () => {
            dispatch(timerDidStop())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)

function timerDidStart() {
    return {
        type: TIMER_DID_START,
        timeInMilliseconds: new Date().getTime(),
        seconds: 0,
        minutes: 25
    }
}

function timerDidStop() {
    return {
        type: TIMER_DID_STOP,
    }
}

export function timerDidFinish() {
    return {
        type: TIMER_DID_FINISH
    }
}

export function updateTimer(milliseconds) {
    return {
        type: TIMER_DID_UPDATE,
        seconds: getSeconds(milliseconds),
        minutes: getMinutes(milliseconds)
    }
}

function getSeconds(milliseconds) {
    const now = new Date().getTime()
    return 59 - (Math.floor((now - milliseconds) / 1000) % 60)
}

function getMinutes(milliseconds) {
    const now = new Date().getTime()
    return 24 - Math.floor((now - milliseconds) / 1000 / 60)
}