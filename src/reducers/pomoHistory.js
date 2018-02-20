import uniqid from 'uniqid'
import {getHourAndMinutes, getToday} from "../utils/date"

export const types = {
    ADD_POMOS: 'ADD_POMOS'
}

const initialState = {
    "2018-02-20": [
        {
            id: uniqid(),
            title: "I did my state!",
            tags: ['work', 'school'],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            timeEnded: "19:24"
        },
        {
            id: uniqid(),
            title: "I did my state!",
            tags: ['work', 'school'],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            timeEnded: "19:24"
        },
        {
            id: uniqid(),
            title: "I did my second!",
            tags: [],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            timeEnded: "19:24"
        }
    ],
    "2018-02-19": [
        {
            id: uniqid(),
            title: "I did my state!",
            tags: ['work', 'school'],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            timeEnded: "19:24"
        },
        {
            id: uniqid(),
            title: "I did my second!",
            tags: [],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            timeEnded: "19:24"
        }
    ],
    "2018-02-17": [
        {
            id: uniqid(),
            title: "I did my state!",
            tags: [],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            timeEnded: "19:24"
        }
    ],
    "2018-02-16": [
        {
            id: uniqid(),
            title: "I did my state!",
            tags: ['work', 'school'],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            project: 'studies',
            timeEnded: "19:24"
        },
        {
            id: uniqid(),
            title: "I did my second!",
            tags: [],
            pomoDone: 18,
            pomoDuration: 25,
            timeStarted: "18:57",
            timeEnded: "19:24"
        }
    ],

}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POMOS:
            return {
                ...state,
                [getToday()]: addDonePomos(state, action.ids, action.timerStartedOn)
            }
        default:
            return state
    }
}

export const actions = {
    addPomos: (ids, timerStartedOn) => ({type: types.ADD_POMOS, ids, timerStartedOn})
}

export const getDonePomos = (state, date) => state.pomoHistory[date] ? state.pomoHistory[date].length : 0

export const addDonePomos = (state, ids, timerStartedOn) => {
    if(ids) {
        state[getToday()].unshift(ids.map(todo => ({
            id: uniqid(),
            title: todo.title,
            tags: todo.tags,
            pomoDone: todo.pomoDone + 1,
            pomoDuration: todo.pomoDuration,
            project: todo.project,
            timeStarted: getHourAndMinutes(timerStartedOn),
            timeEnded: getHourAndMinutes()
        })))
    }
    return state[getToday()]
}