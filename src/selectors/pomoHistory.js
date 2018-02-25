import uniqid from "uniqid"

export const getDonePomos = (state, date) => state.pomoHistory[date] ? state.pomoHistory[date].length : 0

export const getPomoHistory = (state, date) => (state.pomoHistory[date].map(pomo => ({
    ...pomo,
    title: state.todos[pomo.id].title,
    tags: state.todos[pomo.id].tags,
    project: state.todos[pomo.id].project,
    pomoDuration: state.todos[pomo.id].pomoDuration,
    pomoId: uniqid()
})).reverse())