export const initialState = {
    school:{
        projectName: 'school',
        color: '#56CCF2',
        todos: ['jduogars']
    },
    studies: {
        projectName: 'studies',
        color: '#6FCF97',
        todos: ['jduoghru']
    },
    extra: {
        projectName: 'extra lessons',
        color: '#EB5757',
        todos: ['jduoghrs']
    },
}

export default (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}