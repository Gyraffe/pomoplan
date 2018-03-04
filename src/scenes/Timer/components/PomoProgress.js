import React from 'react'
import PropTypes from 'prop-types'
import {Progress, ProgressLabel, StartedPomoProgress} from "./styles"

const PomoProgress = ({minutes, seconds, handleClick, breakIsOn}) => {
    return (
        <StartedPomoProgress onClick={handleClick}>
            <Progress done={breakIsOn ? minutes * 60 + seconds : minutes}
                      outOf={ breakIsOn ? 5*60 : 25}
                      breakIsOn={breakIsOn}>
            </Progress>
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
    handleDelete: PropTypes.func.isRequired,
    breakIsOn: PropTypes.bool.isRequired,
}

export default PomoProgress