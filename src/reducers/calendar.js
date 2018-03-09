import {getDate} from "../utils/date"

export const types = {
    UPDATE_COMPLETED_TODO: 'UPDATE_COMPLETED_TODO'
}

const initialState = {
    "2018-03-09": [
        {id: 'jduoghru', isCompleted: false},
        {id: 'jduoghrs', isCompleted: false},
    ],
    "2018-03-02": [
        {id: 'jduoghrt', isCompleted: false},
        {id: 'jduogaas', isCompleted: true}
    ],
    "2018-03-05": [
        {id: 'jduogads', isCompleted: true}
    ],
    "2018-03-01": [
        {id: 'jdasgars', isCompleted: false},
        {id: 'jduogaws', isCompleted: true}
    ],
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
    const todoIndex = state[getDate()].findIndex(callback)
    let newState = state
    newState[getDate()][todoIndex].isCompleted = true
    return newState
}