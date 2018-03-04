import {getCurrentUnixTime} from "./date"

export const getTimerSeconds = (milliseconds) => {
    const now = getCurrentUnixTime()
    return 59 - (Math.floor((now - milliseconds) / 1000) % 60)
}

export const getPomodoroMinutes = (milliseconds) => {
    const now = getCurrentUnixTime()
    return 24 - Math.floor((now - milliseconds) / 1000 / 60)
}

export const getAllPomodoroTime = (pomodoroNumber) => {
    const hours = Math.floor((pomodoroNumber * 30) / 60)
    const minutes = pomodoroNumber * 30 - hours * 60
    return hours + ':' + (minutes === 0 ? '0' + minutes : minutes)
}

export const getBreakMinutes = (milliseconds) => {
    const now = getCurrentUnixTime()
    return 4 - Math.floor((now - milliseconds) / 1000 / 60)
}