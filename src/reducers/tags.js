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
    },
    focus: {
        tagName: 'focus',
        color: '#F2C94C',
        todos: []
    },
    matematykaDyskretna: {
        tagName: 'matematyka dyskretna',
        color: '#56CCF2',
        todos: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}