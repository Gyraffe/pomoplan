import {getToday} from "../utils/date"

export const getDayNotCompleted = (state, ownProps) => state.calendar[ownProps.date] ?
    state.calendar[ownProps.date].filter( element => !element.isCompleted).map(element => element.id) : undefined

export const getTodayLeftTags = (state) => {
    const ids = state.calendar[getToday()].map(key => !key.isCompleted ? key.id : undefined).filter(id => id !== undefined)
    const tags = [].concat.apply([], ids.map(id => state.todos[id].tags).filter(tag => tag !== undefined)).map(id => state.tags[id])
    return [...new Set(tags)]
}