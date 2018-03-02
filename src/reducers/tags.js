const initialState = {
    school: {
        tagName: 'school',
        color: '#F2994A',
        todos: ['jduogars']
    },
    work: {
        tagName: 'work',
        color: '#219653',
        todos: ['jduoghrs']
    },
    focus: {
        tagName: 'focus',
        color: '#F2C94C',
        todos: ['jduoghru', 'jduoghrs']
    },
    matematykaDyskretna: {
        tagName: 'matematyka dyskretna',
        color: '#56CCF2',
        todos: ['jduoghru']
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}