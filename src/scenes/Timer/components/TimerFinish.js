import React from 'react'
import PropTypes from 'prop-types'
import {Info, Option, Options, Suggestion, TextInfo} from "./styles"
import Icon from "../../../styles/Icon"

const TimerFinish = (props) => {
    console.log(props.markedTodos)
    return (
        <Info>
            <TextInfo>{"Pomodoro has ended!"}<br/>
                <Suggestion>{"Mark the todos you have done during this 25 minutes and submit!"}</Suggestion>
            </TextInfo>
            <Options>
                <Option primary onClick={() => props.handleSubmit(props.markedTodos ,props.getTodos(props.markedTodos), props.timerStartedOn)}>
                    <Icon icon={"done"} primary/>
                </Option>
                <Option accent onClick={props.handleClear}>
                    <Icon icon={"layers_clear"} accent/>
                </Option>
                <Option onClick={props.handleConfirm}>
                    <Icon icon={"delete"} dark/>
                </Option>
            </Options>
        </Info>
    )
}

TimerFinish.propTypes = {
    markedTodos: PropTypes.array,
    timerStartedOn: PropTypes.number,
    handleSubmit: PropTypes.func,
    handleClear: PropTypes.func,
    handleConfirm: PropTypes.func,
    getTodos: PropTypes.func,
}

export default TimerFinish