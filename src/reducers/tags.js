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

export const getTags = (componentProps, stateTags) => {
    return componentProps.tags ? componentProps.tags.map(tagId => stateTags[tagId]) : undefined
}

export const getAllTags = (state) => {
    return Object.keys(state.tags).map(tag => ({name: state.tags[tag].tagName, color: state.tags[tag].color}))
}