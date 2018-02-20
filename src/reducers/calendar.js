import {getToday} from "../utils/date"

export const types = {
    UPDATE_COMPLETED_TODOS: 'UPDATE_COMPLETED_TODOS'
}

const initialState = {
    "2018-02-20": [
        {id: 'jduoghru', isCompleted: false},
        {id: 'jduoghrt', isCompleted: false},
        {id: 'jduoghrs', isCompleted: false}
    ],
    "2018-02-18": [],
    "2018-02-17": []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_COMPLETED_TODOS:
            return {
                ...state,
                [getToday()]: updateTodos(state, action.ids)
            }
        default:
            return state
    }
}

export const actions = {
    updateCompletedTodos: (ids) => ({type: types.UPDATE_COMPLETED_TODOS, ids})
}

export const checkIfCompletedTodo = (state, todos) =>
    todos.map(todo => state.todos[todo].pomoDone === state.todos[todo].pomoDuration ?
        state.calendar[getToday()].forEach(calendarTodo => calendarTodo.id === todo ? true : undefined)
        : undefined
    ).filter(checkIfUndefined)

const updateTodos = (state, todos) => {
    return todos ? state.calendar[getToday()].map(todo => todos.includes(todo) ? todo.isCompleted = false : todo) :
        state.calendar[getToday()]
}

export const getDayNotCompleted = (state, date) => (
    state.calendar[date] ? state.calendar[date].map(element => !element.isCompleted ? element.id : undefined
    ).filter(checkIfUndefined) : undefined)

function checkIfUndefined(value) {
    if(value !== undefined) return value
}