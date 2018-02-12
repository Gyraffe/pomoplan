import {FixedCard} from "./components/styles"
import ProjectName from "../../styles/ProjectName"
import React from "react"
import TodoCardContent from "./components/TodoCardContent"
import PropTypes from 'prop-types'

const TodoCard = props => {
    return (
        <FixedCard className={props.className} left shadow={2}>
            <ProjectName project={props.project} radius width={8} height={2}/>
            <TodoCardContent title={props.title}/>
        </FixedCard>
    )
}

TodoCard.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    project: PropTypes.shape({
        title: PropTypes.string,
        color: PropTypes.string
    }),
    pomoDuration: PropTypes.number,
    pomoDone: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string)
}
export default TodoCard