import React from 'react'
import PropTypes from 'prop-types'
import HeaderWithFilter from "../../../partials/Header/index"
import TodoCard from "../../../partials/TodoCard/index"
import NoTodos from "./NoTodos"
import uniqid from "uniqid"
import {getCalendarDay} from "../../../utils/date"
import {Wrap} from './styles'

const DayView = ({todos, date}) => {
    return (
        <Wrap>
            <HeaderWithFilter title={getCalendarDay(date)}/>
            { (todos && todos.length !== 0) ?
                todos.map( todo => (<TodoCard key={uniqid()} {...todo}/>))
                :
                <NoTodos date={getCalendarDay(date)}/>}
        </Wrap>
    )
}

DayView.propTypes = {
    todos: PropTypes.array,
    date: PropTypes.string.isRequired,
}

export default DayView