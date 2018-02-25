export const initialState = {
    school:{
        projectName: 'school',
        color: '#56CCF2',
        todos: []
    },
    studies: {
        projectName: 'studies',
        color: '#6FCF97'
    }
}

export default (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}