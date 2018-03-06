import React from 'react'
import PropTypes from 'prop-types'
import HeaderWithFilter from "../../../partials/Header/index"
import TodoCard from "../../../partials/TodoCard/index"
import NoTodos from "./NoTodos"
import uniqid from "uniqid"

const TodayView = ({todos}) => {
    return (
        <div>
            <HeaderWithFilter title={"todo today"}/>
            {todos ?
                todos.map( todo => (<TodoCard key={uniqid()} {...todo}/>))
                :
                <NoTodos/>}
        </div>
    )
}

TodayView.propTypes = {
    todos: PropTypes.array,
}

export default TodayView