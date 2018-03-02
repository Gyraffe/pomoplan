import {getToday} from "../utils/date"
import {getProjects} from "./projects"
import {getTodos} from "./todos"
import {createSelector} from "reselect"

export const getDayNotCompleted = (state, ownProps) => state.calendar[ownProps.date] ?
    state.calendar[ownProps.date].filter(element => !element.isCompleted).map(element => element.id) : undefined

export const getTodayIds = (state) => state.calendar[getToday()] ? state.calendar[getToday()] : undefined

export const getTodayLeftTags = (state) => {
    const ids = state.calendar[getToday()] ? state.calendar[getToday()].map(
        key => !key.isCompleted ? key.id : undefined
    ).filter(id => id !== undefined) : undefined
    const tags = ids ? [].concat.apply([], ids.map(id => state.todos[id].tags).filter(tag => tag !== undefined)).map(id => state.tags[id]) : undefined
    return [...new Set(tags)]
}


export const getLeftProjects = createSelector(
    getTodayIds,
    getTodos,
    getProjects,
    (todayTodos, todos, stateProjects) => {
        const ids = todayTodos ? todayTodos.filter(todo => !todo.isCompleted).map(
            todo => todos[todo.id]
        ) : undefined
        const projects = ids ? ids.map(todo => todo.project).filter(project => project !== undefined).map(
            project => stateProjects[project]) : undefined
        console.log(projects)
        return [...new Set(projects)]
    }
)