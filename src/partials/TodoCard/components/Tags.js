import ShortTag from "../../../styles/ShortTag"
import PropTypes from 'prop-types'
import {Tags} from "./styles"
import React from "react"
import Tag from "../../Tag"

const TodoCardTags = props => {
    return (
        <Tags onClick={props.expandTags}>
            {props.tags ?
                props.tags.map(tag => (
                    props.expanded ?
                        <Tag key={tag.id} {...tag}/> :
                        <ShortTag key={tag.id} {...tag}/>
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