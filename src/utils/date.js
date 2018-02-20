export const getTodayStringDate = () => {
    const date = new Date()
    const day = date.getDate()
    const year = date.getFullYear()
    return day + (
        ((day === 1 || day === 21 || day === 31) && 'st') || ((day === 2 || day === 22) && 'nd') || 'th'
    ) + ' ' + getMonthString(date) + ' of ' + year
}

export const getMonthString = (userDate) => {
    const date = userDate ? new Date(userDate) : new Date()
    const month = date.getMonth() + 1
    return (month === 1 && 'January') || (month === 2 && 'February') || (month === 3 && 'March') || (month === 4 && 'April') ||
        (month === 5 && 'May') || (month === 6 && 'June') || (month === 7 && 'July') || (month === 8 && 'August') ||
        (month === 9 && 'September') || (month === 10 && 'October') || (month === 11 && 'November') || (month === 12 && 'December')
}

export const getDayString = (userDate) => {
    const date = userDate ? new Date(userDate) : new Date()
    const day = date.getDay()
    return (day === 0 && 'Monday') || (day === 1 && 'Tuesday') || (day === 2 && 'Wednesday') || (day === 3 && 'Thursday') ||
        (day === 4 && 'Friday') || (day === 5 && 'Saturday') || (day === 6 && 'Sunday')
}

export const checkIfToday = (date) => {
    const previousDate = new Date(date)
    const todayDate = new Date()
    return previousDate.getFullYear() === todayDate.getFullYear()
        && previousDate.getMonth() === todayDate.getMonth()
        && previousDate.getDate() === todayDate.getDate()
}

export const getDayAndMonthString = (date) => {
    const month = new Date(date).getMonth() + 1
    const monthToDisplay = month < 10 ? "0" + month : month
    const dayOfMonth = new Date(date).getDate()
    const dayOfMonthToDisplay = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth
    return dayOfMonthToDisplay + '.' + monthToDisplay
}

export const getToday = () => new Date().toISOString().split("T")[0]

export const getCurrentTime = () => new Date().getTime()

export const getHourAndMinutes = (date) => {
    let minutes = date ? new Date(date).getMinutes() : new Date().getMinutes()
    let hour = date ? new Date(date).getHours() : new Date().getHours()
    return ( hour < 10 ? "0" + hour : hour ) + ":" + ( minutes < 10 ? "0" + minutes : minutes )
}