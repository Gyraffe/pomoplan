import React from 'react'
import PropTypes from 'prop-types'
import {Progress, ProgressLabel, StartedPomoProgress} from "./styles"

const PomoProgress = ({minutes, seconds, handleClick}) => {
    return (
        <StartedPomoProgress onClick={handleClick}>
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
    handleClick: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default PomoProgress