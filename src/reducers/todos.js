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
        default:
            return state
    }
}

export const selectTodos = (state, ids) => ids ? ids.map(id => (state.todos[id])) : undefined
