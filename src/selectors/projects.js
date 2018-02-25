export const getProject = (state, props) => props.project ? state.projects[props.project] : undefined

export const getAllProjects = (state) => Object.keys(state.projects).map(project => ({
    name: state.projects[project].projectName, color: state.projects[project].color
}))
