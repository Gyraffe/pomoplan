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
                {/*<TodoCard title={"Such a super day"} project={{title:"hehe", color: "#F2994A"}}/>
                <TodoCard title={"Nice title bro"}/>
                <TodoCard title={"This is definitely to looooong"}/>*/}
            </div>
        )
    }
}

TodayView.propTypes = {
    showOptions: PropTypes.bool,
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.shape({
            tagName: PropTypes.string,
            color: PropTypes.string
        })),
        project: PropTypes.shape({
            title: PropTypes.string,
            color: PropTypes.string
        })
    }))
}

export default TodayView