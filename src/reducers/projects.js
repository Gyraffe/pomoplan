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

export const getProject = (componentProps, state) => {
    return componentProps.project ? state.projects[componentProps.project] : undefined
}

export const getAllProjects = (state) => {
    return Object.keys(state.projects).map(project => ({
        name: state.projects[project].projectName, color: state.projects[project].color}))
}