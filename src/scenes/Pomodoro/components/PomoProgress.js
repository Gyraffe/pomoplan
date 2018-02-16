import React from 'react'
import PropTypes from 'prop-types'
import {Progress, ProgressLabel, StartedPomoProgress} from "./styles"

const PomoProgress = ({minutes, seconds, onClick}) => {
    return (
        <StartedPomoProgress onClick={onClick}>
            <Progress done={minutes} outOf={25}> </Progress>
            <ProgressLabel>{
                (minutes < 10 ? '0' + minutes : minutes)
                + ":" +
                (seconds < 10 ? '0' + seconds : seconds)
            }</ProgressLabel>
        </StartedPomoProgress>
    )
}

PomoProgress.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    onClick: PropTypes.func
}

export default PomoProgress