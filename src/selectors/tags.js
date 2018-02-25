export const getComponentTags = (state, props) => props.tags ? props.tags.map(tagId => state.tags[tagId]) : undefined

export const getAllTags = (state) => Object.keys(state.tags).map(tag => ({name: state.tags[tag].tagName, color: state.tags[tag].color}))