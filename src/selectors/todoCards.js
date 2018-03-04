// noinspection ES6CheckImport
import {createSelector} from "reselect"

const getTodos = state => state.todoCards

export const getMarkedTodos = createSelector(
    getTodos,
    todoCards => Object.keys(todoCards).length !== 0 ?
        Object.keys(todoCards)
            .map(todo => todoCards[todo].isMarked ? todo : undefined)
            .filter(value => value !== undefined)
        : undefined
)