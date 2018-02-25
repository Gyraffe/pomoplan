export const getFilteredTodayTags = state => state.ui.todoTodayHeader.filter ? state.ui.todoTodayHeader.filter.type === 'tags' ?
    state.ui.todoTodayHeader.filter.values : undefined : undefined

export const getFilteredTodayProject = state => state.ui.todoTodayHeader.filter ? state.ui.todoTodayHeader.filter.type === 'project' ?
    state.ui.todoTodayHeader.filter.values : undefined : undefined