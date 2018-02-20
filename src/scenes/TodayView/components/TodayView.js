import React from 'react'
import PropTypes from 'prop-types'
import HeaderWithFilter from "../../../partials/Header/index"
import TodoCard from "../../../partials/TodoCard/index"
import NoTodos from "./NoTodos"

const TodayView = ({todos}) => {
    return (
        <div>
            <HeaderWithFilter title={"todo today"}/>
            {todos ?
                todos.map( todo => (<TodoCard key={todo.id} id={todo.id} {...todo.todo}/>))
                :
                <NoTodos/>}
        </div>
    )
}

TodayView.propTypes = {
    todos: PropTypes.array
}

export default TodayView