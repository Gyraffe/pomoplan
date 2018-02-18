import React from 'react'
import PropTypes from 'prop-types'
import HeaderWithFilter from "../../../partials/HeaderWithFilter/index"
import TodoCard from "../../../partials/TodoCard/index"
import NoTodos from "./NoTodos"

class TodayView extends React.Component {
    render() {
        const isExpanded = true
        return (
            <div>
                <HeaderWithFilter title={"todo today"} isExpanded={isExpanded}/>
                {this.props.todos ?
                    this.props.todos.map(todo => (<TodoCard key={todo.id} {...todo}/>))
                :
                <NoTodos/>}
            </div>
        )
    }
}

TodayView.propTypes = {
    todos: PropTypes.array
}

export default TodayView