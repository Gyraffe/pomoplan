import uniqid from 'uniqid'
import {selectTodo} from "./todos"
import {getHourAndMinutes, getToday} from "../utils/date"

export const types = {
    ADD_POMO_TO_HISTORY: 'ADD_POMO_TO_HISTORY'
}

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POMO_TO_HISTORY:
            return Object.keys(state).includes(getToday()) ?
                {
                    ...state,
                    [getToday()]: [
                        action.object,
                        ...state[getToday()]
                    ]
                } :
                {
                    ...state,
                    [getToday()]: [
                        action.object,
                    ]
                }
        default:
            return state
    }
}

export const actions = {
    addPomoObject: (object) => ({type: types.ADD_POMO_TO_HISTORY, object}),
    createPomoObject: (id) => (dispatch, getState) => {
        let todo = selectTodo(getState(), id)
        let pomoObject = {
            id: id,
            timeStarted: getHourAndMinutes(getState().timer.startedOn),
            timeEnded: getHourAndMinutes(),
            pomoDone: todo.pomoDone
        }
        dispatch(actions.addPomoObject(pomoObject))
    }
}

export const getDonePomos = (state, date) => state.pomoHistory[date] ? state.pomoHistory[date].length : 0

export const getPomoHistory = (state, date) => (state.pomoHistory[date].map(pomo => ({
    ...pomo,
    title: state.todos[pomo.id].title,
    tags: state.todos[pomo.id].tags,
    project: state.todos[pomo.id].project,
    pomoDuration: state.todos[pomo.id].pomoDuration,
    pomoId: uniqid()
})).reverse())