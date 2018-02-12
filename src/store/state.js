import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'
import navigationBar from "../scenes/Navigation/reducer"

const pomoPlan = combineReducers({
    navigationBar,
    firebase: firebaseReducer,
    form: formReducer,
})

export default pomoPlan