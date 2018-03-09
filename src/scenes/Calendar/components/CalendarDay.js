import React from "react"
import PropTypes from "prop-types"
import {DayContent, DayHeader, DayNumber, DayTodos, GridSquare} from "./styles"
import ShortTodoCard from "../../../partials/ShortTodoCard"
import uniqid from "uniqid"
import MoreTodos from "../../../partials/ShortTodoCard/components/MoreTodos"

const CalendarDay = ({dayNumber, moment, isToday, isSelected, selectDay, todos}) => {
    return (
        <GridSquare isSelected={isSelected} onClick={() => selectDay()}>
            <DayContent>
                <DayHeader>
                    <DayNumber today={isToday}>
                        {dayNumber}
                    </DayNumber>
                </DayHeader>
                <DayTodos>
                    {displayTodoTitles(todos, moment)}
                </DayTodos>
            </DayContent>
        </GridSquare>
    )
}

CalendarDay.propTypes = {
    dayNumber: PropTypes.number.isRequired,
    moment: PropTypes.object.isRequired,
    isToday: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    selectDay: PropTypes.func.isRequired,
    todos: PropTypes.array
}

export default CalendarDay

function displayTodoTitles(todos, moment) {
    let todoCards = []
    if(todos) {
        if(todos.length >= 3) {
            for(let i = 0; i < 2; i++) {
                todoCards.push(<ShortTodoCard moment={moment} key={uniqid()} {...todos[i]}/>)
            }
            todoCards.push(<MoreTodos key={uniqid()} count={todos.length - 2}/>)
        }
        else todos.forEach(
            todo => {
                todoCards.push(<ShortTodoCard moment={moment} key={uniqid()} {...todo}/>)
            }
        )
    }
    return todoCards
}