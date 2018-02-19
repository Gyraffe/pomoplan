const initialState = {
    "2018-02-19": [
        {id: 'jduoghru', isCompleted: false},
        {id: 'jduoghrt', isCompleted: false},
        {id: 'jduoghrs', isCompleted: false}
    ],
    "2018-02-18": [],
    "2018-02-17": []
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const getDayNotCompleted = (state, date) => (
    state.calendar[date] ? state.calendar[date].map(element => !element.isCompleted ? element.id : undefined
    ).filter(checkIfUndefined) : undefined)

function checkIfUndefined(value) {
    if(value !== undefined) return value
}