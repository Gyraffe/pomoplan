import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'
import ui from "../reducers/ui"
import timer from '../reducers/timer'
import pomoHistory from '../reducers/pomoHistory'
import todos from '../reducers/todos'
import todoCards from '../reducers/todoCards'
import tags from '../reducers/tags'
import projects from '../reducers/projects'
import calendar from '../reducers/calendar'

const pomoPlan = combineReducers({
    ui,
    timer,
    todos,
    todoCards,
    pomoHistory,
    tags,
    projects,
    calendar,
    firebase: firebaseReducer,
    form: formReducer,
})

export default pomoPlan