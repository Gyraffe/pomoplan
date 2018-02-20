const types = {
    TOGGLE_NAVIGATION: 'TOGGLE_NAVIGATION',
    TOGGLE_TODO_TODAY_HEADER: 'TOGGLE_TODO_TODAY_HEADER',
    TOGGLE_POMO_TODAY_HEADER: 'TOGGLE_POMO_TODAY_HEADER',
    CANCEL_DELETING_POMO: 'CANCEL_DELETING_POMO',
    TOGGLE_DELETING_POMO: 'TOGGLE_DELETING_POMO'
}

const initialState = {
    navigationIsOpened: false,
    todoTodayHeader: {
        isExpanded: true,
    },
    pomoTodayHeader: {
        isExpanded: false,
    },
    confirmDeletingPomo: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_NAVIGATION:
            return {
                ...state,
                navigationIsOpened: !state.navigationIsOpened
            }
        case types.TOGGLE_TODO_TODAY_HEADER:
            return {
                ...state,
                todoTodayHeader: {
                    ...state.todoTodayHeader,
                    isExpanded: !state.todoTodayHeader.isExpanded
                }
            }
        case types.TOGGLE_POMO_TODAY_HEADER:
            return {
                ...state,
                pomoTodayHeader: {
                    ...state.pomoTodayHeader,
                    isExpanded: !state.pomoTodayHeader.isExpanded
                }
            }
        case types.TOGGLE_DELETING_POMO:
            return {
                ...state,
                confirmDeletingPomo: !state.confirmDeletingPomo,
            }
        default:
            return state
    }
}

export const actions = {
    toggleNavigation: () => ({type: types.TOGGLE_NAVIGATION}),
    toggleTodoTodayHeader: () => ({type: types.TOGGLE_TODO_TODAY_HEADER}),
    togglePomoTodayHeader: () => ({type: types.TOGGLE_POMO_TODAY_HEADER}),
    toggleDeletingPomo: () => ({type: types.TOGGLE_DELETING_POMO}),
}