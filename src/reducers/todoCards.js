const types = {
    TOGGLE_TODO_TAGS: 'TOGGLE_TODO_TAGS',
    TOGGLE_TODO_MARK_DONE: 'TOGGLE_TODO_MARK_DONE',
    UNMARK_ALL_TODOS: 'UNMARK_ALL_TODOS',
}

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_TODO_TAGS:
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
        case types.TOGGLE_TODO_MARK_DONE:
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
        case types.UNMARK_ALL_TODOS:
            return mapTodos(state, todo => ({
                ...todo,
                isMarked: false,
            }))
        default:
            return state
    }
}

export const actions = {
    toggleExpandTags: (id) => ({type: types.TOGGLE_TODO_TAGS, id}),
    toggleTaskDoneOnPomo: (id) => ({type: types.TOGGLE_TODO_MARK_DONE, id}),
    unmarkAllTodos: () => ({type: types.UNMARK_ALL_TODOS}),
}

const mapTodos = (state, callback) => {
    Object.keys(state).map(key =>
        state = {
            ...state,
            [key]: callback(state[key])
        }
    )
    return state
}