import React from 'react'
import {firebaseConnect, isLoaded} from "react-redux-firebase"
import {connect} from "react-redux"
import {compose} from "redux"
import HomeScreen from './components/HomeScreen'
import LoadingScreen from "../../partials/LoadingScreen"

const Home = ({profile}) => {
    if(isLoaded(profile))
        return (
            <HomeScreen date={getTodayStringDate()} username={profile.username}/>
        )
    else
        return (
            <LoadingScreen/>
        )
}

export default compose(
    firebaseConnect(),
    connect((state) => ({
        profile: state.firebase.profile,
    }))
)(Home)

function getTodayStringDate() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return day.toString() + (
        ((day === 1 || day === 21 || day === 31 ) && 'st') || ((day === 2 || day === 22) && 'nd') || 'th'
    ) + ' ' + (
        (month === 1 && 'January') || (month === 2 && 'February') || (month === 3 && 'March') || (month === 4 && 'April') ||
        (month === 5 && 'May') || (month === 6 && 'June') || (month === 7 && 'July') || (month === 8 && 'August') ||
        (month === 9 && 'September') || (month === 10 && 'October') || (month === 11 && 'November') || (month === 12 && 'December')
    ) + ' of ' + year.toString()
}