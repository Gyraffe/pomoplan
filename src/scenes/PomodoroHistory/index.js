import React from 'react'
import HeaderWithFilter from "../../partials/HeaderWithFilter"
import HistoryBox from "./components/HistoryBox"

class PomodoroHistory extends React.Component{

    render(){
        const isExpanded = true
        return(
            <div>
                <HeaderWithFilter title={"pomo today"} isExpanded={isExpanded}/>
                <HistoryBox/>
            </div>
        )
    }
}

export default PomodoroHistory