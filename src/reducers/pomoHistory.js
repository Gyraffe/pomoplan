import uniqid from 'uniqid'

const initialState = {
    "2018-02-19" : [
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
    "2018-02-17" : [
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
    "2018-02-16" : [
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
        default:
            return state
    }
}

export const getDonePomos = (state, date) => state.pomoHistory[date] ? state.pomoHistory[date].length : 0