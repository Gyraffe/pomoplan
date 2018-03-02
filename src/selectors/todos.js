import {createSelector} from 'reselect'
import {getDayNotCompleted, getTodayIds} from "./calendar"

export const selectTodo = (state, id) => state.todos[id]

export function getTodos(state) {
    return state.todos ? state.todos : undefined
}

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

export const getTodayLeftPomo = createSelector(
    getTodayIds,
    getTodos,
    (todayTodos, todos) => {
        const notCompletedTodos = todayTodos.filter(todo => !todo.isCompleted)
        let pomoLeftCount = 0
        notCompletedTodos.forEach(todoId => {
            const todo = todos[todoId.id]
            pomoLeftCount = pomoLeftCount + todo.pomoDuration - todo.pomoDone
        })
        return pomoLeftCount
    }
)
