import {createSelector} from 'reselect'
import {getDayIds, getDayNotCompletedIds} from "./calendar"

export const selectTodo = (state, id) => state.todos[id]

export function getTodos(state) {
    return state.todos ? state.todos : undefined
}

const getFilterType = state => state.ui.dayHeader.filter ? state.ui.dayHeader.filter.type : undefined
const getFilterValues = state => state.ui.dayHeader.filter ? state.ui.dayHeader.filter.values : undefined

export const makeGetFilteredTodos = () =>  createSelector(
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

export const makeGetFilteredAllTodos = () =>  createSelector(
    getTodos,
    getDayIds,
    getFilterType,
    getFilterValues,
    (todos, ids, filterType, filterValues) => {
        let todosReturn = []
        if(filterType && ids) {
            if(filterType.includes('project'))
                todosReturn = todosReturn.concat(ids
                    .filter(todo => todos[todo.id].project ? filterValues.includes(todos[todo.id].project) : false)
                    .map(todo => ({id: todo.id, completed: todo.isCompleted, ...todos[todo.id]})))
            if(filterType.includes('tags'))
                todosReturn = todosReturn.concat(ids
                    .filter(id => todos[id].tags ? todos[id].tags.includes(filterValues) : false)
                    .map(todo => ({id: todo.id, completed: todo.isCompleted, ...todos[todo.id]})))
        }
        else
            todosReturn = ids ? ids.map(todo => ({id: todo.id, completed: todo.isCompleted, ...todos[todo.id]})) : undefined
        return todosReturn
    }
)