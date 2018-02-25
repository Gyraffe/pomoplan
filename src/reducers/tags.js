const initialState = {
    school: {
        tagName: 'school',
        color: '#F2994A',
        todos: []
    },
    work: {
        tagName: 'work',
        color: '#219653',
        todos: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}