import React from "react"
import PropTypes from "prop-types"
import {Body, Count} from "./styles"

const MoreTodos = props => {
    return (
        <Body>
        <Count>
            {"+" + props.count}
        </Count>
        </Body>
    )
}

MoreTodos.propTypes = {
    count: PropTypes.number.isRequired
}

export default MoreTodos