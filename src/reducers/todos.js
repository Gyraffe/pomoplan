export const types = {
    ADD_POMO: 'ADD_POMO'
}

const initialState = {
    jduoghru: {
        title: 'I did my first todo!',
        description: "This is quite interesting thing!",
        pomoDone: 4,
        pomoDuration: 6,
        project: 'studies',
        tags: ['work', 'school'],
        date: undefined
    },
    jduoghrt: {
        title: 'I did my first todo!',
        description: "This is quite interesting thing!",
        pomoDone: 4,
        pomoDuration: 6,
        project: undefined,
        tags: undefined,
        date: undefined
    },
    jduoghrs: {
        title: 'I did my first todo!',
        description: "This is quite interesting thing!",
        pomoDone: 4,
        pomoDuration: 6,
        project: 'school',
        tags: undefined,
        date: undefined
    },
    jduogars: {
        title: 'I did my first todo!',
        description: "This is quite interesting thing!",
        pomoDone: 4,
        pomoDuration: 6,
        project: 'school',
        tags: undefined,
        date: undefined
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POMO:
            return addPomoDone(state, action.ids)
        default:
            return state
    }
}

export const actions = {
    incrementPomoDone: (ids) => ({type: types.ADD_POMO, ids})
}

export const selectTodos = (state, ids) => ids ? ids.map(id => ({id: id, todo: state.todos[id]})) : undefined

const addPomoDone = (state, ids) => {
    if(ids)
        ids.map(id =>
            state = {
                ...state,
                [id]: {
                    ...id,
                    pomoDone: id.pomoDone !== id.pomoDuration ? id.pomoDone + 1 : id.pomoDone
                }
            }
        )
    return state
}