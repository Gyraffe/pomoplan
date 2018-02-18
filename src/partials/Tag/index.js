import React from 'react'
import PropTypes from 'prop-types'
import {TagBody} from "./styles"

const Tag = ({tagName, color}) => {
    return (
        <TagBody color={color}>
            {tagName}
        </TagBody>
    )
}

Tag.propTypes = {
    id: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Tag