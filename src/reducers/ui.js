import {getMarkedTodos} from "../selectors/todoCards"

const types = {
    TOGGLE_NAVIGATION: 'TOGGLE_NAVIGATION',
    TOGGLE_TODO_TODAY_HEADER: 'TOGGLE_TODO_TODAY_HEADER',
    TOGGLE_POMO_TODAY_HEADER: 'TOGGLE_POMO_TODAY_HEADER',
    CANCEL_DELETING_POMO: 'CANCEL_DELETING_POMO',
    TOGGLE_DELETING_POMO: 'TOGGLE_DELETING_POMO',
    ADD_NEW_FILTER: 'ADD_NEW_FILTER'
}

const initialState = {
    navigationIsOpened: false,
    todoTodayHeader: {
        filter: [],
        isExpanded: true,
    },
    pomoTodayHeader: {
        filter: [],
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
    addNewFilter: (header, filter) => ({type: types.ADD_NEW_FILTER, header, filter}),
    handleFilter: (header, type, value) => (dispatch, getState) => {
        const stateFilter = getState().ui.todoTodayHeader.filter
        if(header === 'today') {
            if(stateFilter.length !== 0) {
                dispatch(actions.addNewFilter('today', {type: [...type], values: [...value]}))
            } else {
                if(!stateFilter.includes(type))
                    stateFilter.type.push(type)
                stateFilter.values.push(value)
            }
        }
        if(header === 'pomo') {

        }

    }
}