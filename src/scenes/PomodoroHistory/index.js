import React from 'react'
import HeaderWithFilter from "../../partials/HeaderWithFilter"
import History from "./containers/History"

class PomodoroHistory extends React.Component{
    render(){
        const isExpanded = true
        return(
            <div>
                <HeaderWithFilter title={"pomo today"} isExpanded={isExpanded}/>
                <History/>
            </div>
        )
    }
}

export default PomodoroHistory