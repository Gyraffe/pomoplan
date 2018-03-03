import {getToday} from "../utils/date"
import {getProjects} from "./projects"
import {getTodos} from "./todos"
import {createSelector} from "reselect"
import {getTags} from "./tags"

export const getDayNotCompletedIds = (state, ownProps) => state.calendar[ownProps.date] ?
    state.calendar[ownProps.date].filter(element => !element.isCompleted).map(element => element.id)
    : undefined

export const getTodayIds = (state) => state.calendar[getToday()] ? state.calendar[getToday()]
    : undefined

export const getTodayNotCompletedIds = (state) => state.calendar[getToday()] ?
    state.calendar[getToday()]
        .map(key => !key.isCompleted ? key.id : undefined)
        .filter(id => id !== undefined)
    : undefined

export const getTodayLeftTags = createSelector(
    getTodayNotCompletedIds,
    getTodos,
    getTags,
    (notCompletedIds, todos, tags) => [...new Set(notCompletedIds ?
        [].concat.apply([], notCompletedIds.map(id => todos[id].tags)
            .filter(tag => tag !== undefined))
            .map(id => tags[id])
        : undefined
    )]
)

export const getLeftProjects = createSelector(
    getTodayNotCompletedIds,
    getTodos,
    getProjects,
    (notCompletedIds, todos, stateProjects) => [...new Set(notCompletedIds ?
        notCompletedIds
            .map(id => todos[id].project)
            .filter(project => project !== undefined)
            .map(project => stateProjects[project])
        : undefined)]
)

export const getTodayLeftPomo = createSelector(
    getTodayNotCompletedIds,
    getTodos,
    (notCompletedIds, todos) => {
        let pomoLeftCount = 0
        if(notCompletedIds)
            notCompletedIds.forEach(id => {
                const todo = todos[id]
                pomoLeftCount = pomoLeftCount + todo.pomoDuration - todo.pomoDone
            })
        return pomoLeftCount
    }
)