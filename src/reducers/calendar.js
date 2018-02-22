import {getToday} from "../utils/date"
import {filterUndefined} from "../utils/objects"

export const types = {
    UPDATE_COMPLETED_TODO: 'UPDATE_COMPLETED_TODO'
}

const initialState = {
    "2018-02-22": [
        {id: 'jduoghru', isCompleted: false},
        {id: 'jduoghrt', isCompleted: false},
        {id: 'jduoghrs', isCompleted: false},
        {id: 'jduogars', isCompleted: false},
    ],
    "2018-02-18": [],
    "2018-02-17": []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_COMPLETED_TODO:
            return updateTodos(state, todo => todo.id === action.id)
        default:
            return state
    }
}

export const actions = {
    updateCompletedTodo: (id) => ({type: types.UPDATE_COMPLETED_TODO, id})
}

const updateTodos = (state, callback) => {
    const todoIndex = state[getToday()].findIndex(callback)
    let newState = state
    newState[getToday()][todoIndex].isCompleted = true
    return newState
}

export const getDayNotCompleted = (state, date) => (
    state.calendar[date] ? filterUndefined(state.calendar[date].map(element => !element.isCompleted ? element.id : undefined
    )) : undefined)