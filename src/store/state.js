import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'
import navigationBar from "../scenes/Navigation/reducer"
import timer from "../scenes/Pomodoro/reducerTimer"
import todos from "../scenes/TodayView/reducer"
import todoCards from "../partials/TodoCard/reducer"
import pomoHistory from "../scenes/PomodoroHistory/reducer"

const pomoPlan = combineReducers({
    navigationBar,
    timer,
    todos,
    todoCards,
    pomoHistory,
    firebase: firebaseReducer,
    form: formReducer,
})

export default pomoPlan