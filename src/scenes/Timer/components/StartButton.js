import React from 'react'
import {StartPomoButton} from "./styles"
import PropTypes from 'prop-types'

const StartButton = ({handleClick}) => {
    return (
        <StartPomoButton onClick={handleClick}>
            START
        </StartPomoButton>
    )
}

StartButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default StartButton