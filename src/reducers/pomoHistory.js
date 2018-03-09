import {selectTodo} from "../selectors/todos"
import {getHourAndMinutes, getDate} from "../utils/date"

export const types = {
    ADD_POMO_TO_HISTORY: 'ADD_POMO_TO_HISTORY'
}

const initialState = {
    [getDate()]: [
        {
            id: 'jduoghru',
            timeStarted: '07:11',
            timeEnded: '07:15',
            pomoDone: 1
        }
    ],
    '2018-03-01': [
        {
            id: 'jduoghru',
            timeStarted: '07:11',
            timeEnded: '07:15',
            pomoDone: 1
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POMO_TO_HISTORY:
            return Object.keys(state).includes(getDate()) ?
                {
                    ...state,
                    [getDate()]: [
                        action.object,
                        ...state[getDate()]
                    ]
                } :
                {
                    ...state,
                    [getDate()]: [
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
    },
    createBlankPomoObject: () => (dispatch, getState) => {
        dispatch(actions.addPomoObject({
            timeStarted: getHourAndMinutes(getState().timer.startedOn),
            timeEnded: getHourAndMinutes(),
            pomoDone: undefined
        }))
    }
}