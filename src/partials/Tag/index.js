import React from 'react'
import PropTypes from 'prop-types'
import {TagBody} from "./styles"

const Tag = ({name, color}) => {
    return (
        <TagBody color={color}>
            {name}
        </TagBody>
    )
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Tag