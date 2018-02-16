import React from 'react'
import PropTypes from 'prop-types'
import {Progress, ProgressBar, ProgressLabel} from "./styles"

const PomoProgressLine = ({done, outOf, onClick}) => {
    return (
        <Progress onClick={onClick}>
            <ProgressBar done={done} outOf={outOf}> </ProgressBar>
            <ProgressLabel>{done + ' | ' + outOf}</ProgressLabel>
        </Progress>
    )
}

PomoProgressLine.propTypes = {
    done: PropTypes.number,
    outOf: PropTypes.number,
    onClick: PropTypes.func
}

export default PomoProgressLine