import React from 'react'
import PropTypes from "prop-types"
import {Info} from "./styles"

const NoTodos = ({date}) => {
    return (
        <Info>
            {"You have no tasks for " + date.toLowerCase() + "! 😄"}
        </Info>
    )
}

NoTodos.propTypes = {
    date: PropTypes.string.isRequired
}

export default NoTodos