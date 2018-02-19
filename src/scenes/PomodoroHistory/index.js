import React from 'react'
import HeaderWithFilter from "../../partials/Header"
import History from "./containers/History"

const PomodoroHistory = props => {
    return (
        <div>
            <HeaderWithFilter title={"pomo today"}/>
            <History/>
        </div>
    )
}

export default PomodoroHistory