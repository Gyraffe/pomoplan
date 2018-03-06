import ShortTag from "../../../styles/ShortTag"
import PropTypes from 'prop-types'
import {Tags} from "./styles"
import React from "react"
import Tag from "../../Tag"
import uniqid from "uniqid"

const TodoCardTags = props => {
    return (
        <Tags onClick={props.expandTags}>
            {props.tags ?
                props.tags.map(tag => (
                    props.expanded ?
                        <Tag key={uniqid()} {...tag}/> :
                        <ShortTag key={uniqid()} {...tag}/>
                ))
                : ''}
        </Tags>
    )
}

TodoCardTags.propTypes = {
    tags: PropTypes.array,
    expanded: PropTypes.bool
}

export default TodoCardTags