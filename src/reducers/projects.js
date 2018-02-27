export const initialState = {
    school:{
        projectName: 'school',
        color: '#56CCF2',
        todos: []
    },
    studies: {
        projectName: 'studies',
        color: '#6FCF97'
    },
    extra: {
        projectName: 'extra lessons',
        color: '#EB5757'
    }
}

export default (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}