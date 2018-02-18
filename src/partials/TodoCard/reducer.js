import * as A from '../../constants/actionTypes'

const initialState = {}

function todoCards(state = initialState, action) {
    switch (action.type) {
        case A.TOGGLE_TODO_TAGS:
            return Object.keys(state).includes(action.id) ?
                {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        tagsExpanded: !state[action.id].tagsExpanded
                    }
                } :
                {
                    ...state,
                    [action.id]: {
                        id: action.id,
                        tagsExpanded: true
                    }
                }
        case A.TOGGLE_TODO_MARK_DONE:
            return Object.keys(state).includes(action.id) ?
                {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        isMarked: !state[action.id].isMarked
                    }
                } :
                {
                    ...state,
                    [action.id]: {
                        id: action.id,
                        isMarked: true
                    }
                }
        case A.UNMARK_ALL_TODOS:
            return mapTodos(state, todo => ({
                ...todo,
                isMarked: false,
            }))
        default:
            return state
    }
}

export default todoCards

const mapTodos = (state, callback) => {
    Object.keys(state).map(key =>
        state = {
            ...state,
            [key]: callback(state[key])
        }
    )
    return state
}