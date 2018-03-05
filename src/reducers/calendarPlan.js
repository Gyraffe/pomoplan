import moment from "moment"

export const types = {
}

const initialState = {
    currentDateSelected: undefined,
    currentMomentDisplayed: moment()
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {
}