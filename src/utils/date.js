import moment from "moment"

export const getTodayStringDate = () => moment().format('Do MMMM [of] YYYY')

export const getCalendarDay = (userDate) => moment(userDate ? userDate : moment()).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
})

export const getDayAndMonthString = (date) => date ? moment(date).format("DD.MM") : undefined

export const getDate = (givenMoment) => givenMoment ?
    moment(givenMoment).toISOString().split("T")[0]
    : moment().toISOString().split("T")[0]

export const getCurrentUnixTime = () => moment().valueOf()

export const getHourAndMinutes = (date) => moment(date).format("HH:mm")

export const isOverdue = (date) => date ? moment(date).isBefore(getDate(), 'day') : false