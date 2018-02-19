import {getCurrentTime} from "./date"

export const getPomodoroSeconds = (milliseconds) => {
    const now = getCurrentTime()
    return 59 - (Math.floor((now - milliseconds) / 1000) % 60)
}

export const getPomodoroMinutes = (milliseconds) => {
    const now = getCurrentTime()
    return 24 - Math.floor((now - milliseconds) / 1000 / 60)
}

export const getAllPomodoroTime = (pomodoroNumber) => {
    const hours = Math.floor((pomodoroNumber * 30) / 60)
    const minutes = pomodoroNumber * 30 - hours * 60
    return hours + ':' + (minutes === 0 ? '0' + minutes : minutes)
}