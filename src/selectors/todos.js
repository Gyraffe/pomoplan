import {createSelector} from 'reselect'
import {getDayNotCompletedIds, getTodayIds} from "./calendar"

export const selectTodo = (state, id) => state.todos[id]

export function getTodos(state) {
    return state.todos ? state.todos : undefined
}

const getFilterType = state => state.ui.todoTodayHeader.filter ? state.ui.todoTodayHeader.filter.type : undefined
const getFilterValues = state => state.ui.todoTodayHeader.filter ? state.ui.todoTodayHeader.filter.values : undefined

export const getFilteredTodos = createSelector(
    getTodos,
    getDayNotCompletedIds,
    getFilterType,
    getFilterValues,
    (todos, notCompletedIds, filterType, filterValues) => {
        let todosReturn = []
        if(filterType && notCompletedIds) {
            if(filterType.includes('project'))
                todosReturn = todosReturn.concat(notCompletedIds.filter(id => todos[id].project ? filterValues.includes(todos[id].project) : false
                ).map(id => ({id: id, ...todos[id]})))
            if(filterType.includes('tags'))
                todosReturn = todosReturn.concat(notCompletedIds.filter(id =>
                    todos[id].tags ? todos[id].tags.includes(filterValues) : false
                ).map(id => ({id: id, ...todos[id]})))
        }
        else
            todosReturn = notCompletedIds ? notCompletedIds.map(id => ({id: id, ...todos[id]})) : undefined
        return todosReturn
    }
)

