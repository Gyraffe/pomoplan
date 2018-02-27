import {createSelector} from 'reselect'
import {getDayNotCompleted} from "./calendar"

export const selectTodo = (state, id) => state.todos[id]
const getTodos = state => state.todos
const getFilterType = state => state.ui.todoTodayHeader.filter ? state.ui.todoTodayHeader.filter.type : undefined
const getFilterValues = state => state.ui.todoTodayHeader.filter ? state.ui.todoTodayHeader.filter.values : undefined

export const getFilteredTodos = createSelector(
    getTodos,
    getDayNotCompleted,
    getFilterType,
    getFilterValues,
    (todos, calendarIds, filterType, filterValues) => {
        let todosReturn = []
        if(filterType && calendarIds) {
            if(filterType.includes('project'))
                todosReturn = todosReturn.concat(calendarIds.filter(id => todos[id].project ? filterValues.includes(todos[id].project) : false
                ).map(id => ({id: id, ...todos[id]})))
            if(filterType.includes('tags'))
                todosReturn = todosReturn.concat(calendarIds.filter(id =>
                    todos[id].tags ? todos[id].tags.includes(filterValues) : false
                ).map(id => ({id: id, ...todos[id]})))
        }
        else
            todosReturn = calendarIds ? calendarIds.map(id => ({id: id, ...todos[id]})) : undefined
        return todosReturn
    }
)