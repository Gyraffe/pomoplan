// import * as A from '../../constants/actionTypes'
import uniqid from 'uniqid'

const initialState = {
    "2018-02-18" : [
        {
            id: uniqid(),
            title: "I did my state!",
            tags: [{id: uniqid(), tagName:"work", color:"#F2994A"}],
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
            tags: [{id: uniqid(), tagName:"work", color:"#F2994A"}],
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

}

function pomoHistory(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default pomoHistory