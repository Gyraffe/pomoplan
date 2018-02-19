import React from 'react'
import PropTypes from 'prop-types'
import HeaderWithFilter from "../../../partials/Header/index"
import TodoCard from "../../../partials/TodoCard/index"
import NoTodos from "./NoTodos"

const TodayView = ({todos}) => {
    console.log(todos)
    return (
        <div>
            <HeaderWithFilter title={"todo today"}/>
            {todos ?
                Object.keys(todos).map( id => (<TodoCard key={id} id={id} {...todos[id]}/>))
                :
                <NoTodos/>}
        </div>
    )
}

TodayView.propTypes = {
    todos: PropTypes.array
}

export default TodayView