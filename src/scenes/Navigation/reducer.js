import * as A from '../../constants/actionTypes'

const initialState = {
    navigationIsOpen: false,
}

function navigationBar(state = initialState, action) {
    switch (action.type) {
        case A.TOGGLE_NAVIGATION:
            return {
                ...state,
                navigationIsOpen: !state.navigationIsOpen
            }
        default:
            return state
    }
}

export default navigationBar