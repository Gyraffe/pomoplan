import React from 'react'
import {StartPomoButton} from "../components/styles"
import PropTypes from 'prop-types'

const StartButton = props => {
    return (
        <StartPomoButton onClick={
            (e) => {e.preventDefault()
            props.onClick()}
        }>
            START
        </StartPomoButton>
    )
}

StartButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default StartButton