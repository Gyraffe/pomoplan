import uniqid from "uniqid"
import {getDate} from "../utils/date"
import {getTags} from "./tags"
import {createSelector} from "reselect"
import {getTodos} from "./todos"
import {getProjects} from "./projects"

export const getDonePomos = (state, date) => state.pomoHistory[date] ? state.pomoHistory[date].length : 0

export const getPomoHistory = (state, date) => state.pomoHistory[date]
    .map(pomo => pomo.pomoDone !== undefined ?
        ({
            ...pomo,
            title: state.todos[pomo.id].title,
            tags: state.todos[pomo.id].tags,
            project: state.todos[pomo.id].project,
            pomoDuration: state.todos[pomo.id].pomoDuration,
            pomoId: uniqid()
        })
        : ({
            ...pomo,
            pomoId: uniqid(),
            title: "Pomodoro",
            pomoDone: 1,
            pomoDuration: 1
        }))
    .reverse()

export const getTodayPomos = state => state.pomoHistory[getDate()] ? state.pomoHistory[getDate()] : undefined

export const getDoneTags = createSelector(
    getTodayPomos,
    getTodos,
    getTags,
    (pomoDone, todos, stateTags) => {
        const ids = pomoDone ?
            pomoDone
                .map(pomo => todos[pomo.id] ? todos[pomo.id] : undefined)
                .filter(tag => tag !== undefined)
            : undefined
        const tags = ids ?
            [].concat.apply([], ids.map(todo => todo.tags).filter(tag => tag !== undefined))
                .map(id => stateTags[id])
            : undefined
        return tags !== undefined ?
            [...new Set(tags)]
            : undefined
    }
)

export const getDoneProjects = createSelector(
    getTodayPomos,
    getTodos,
    getProjects,
    (pomoDone, todos, stateProjects) => {
        const ids = pomoDone ?
            pomoDone
                .map(pomo => todos[pomo.id] ? todos[pomo.id] : undefined)
                .filter(tag => tag !== undefined)
            : undefined
        const projects = ids ?
            [].concat.apply([], ids.map(todo => todo.project).filter(project => project !== undefined))
                .map(project => stateProjects[project])
            : undefined
        return projects !== undefined ?
            [...new Set(projects)]
            : undefined
    }
)