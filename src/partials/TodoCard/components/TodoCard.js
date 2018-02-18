import {FixedCard} from "../components/styles"
import ProjectName from "../../../styles/ProjectName"
import React from "react"
import TodoCardContent from "../components/TodoCardContent"
import PropTypes from 'prop-types'

const TodoCard = props => {
    return (
        <FixedCard isMarked={props.isMarked} className={props.className} left shadow={(props.isMarked && 5) || 2}
                   onClick={ props.isDuringPomo ? props.toggleDone : props.expandTags}>
            <ProjectName project={props.project} radius width={8} height={2}/>
            <TodoCardContent {...props}/>
        </FixedCard>
    )
}

TodoCard.propTypes = {
    isMarked: PropTypes.bool,
    expandTags: PropTypes.func,
    toggleDone: PropTypes.func,
    className: PropTypes.string,
    project: PropTypes.object,
}

export default TodoCard