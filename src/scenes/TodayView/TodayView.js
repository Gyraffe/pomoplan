import React from 'react'
import PropTypes from 'prop-types'
import HeaderWithFilter from "../../partials/HeaderWithFilter"
import TodoCard from "../../partials/TodoCard"

class TodayView extends React.Component {
    render() {
        const isExpanded = true
        return (
            <div>
                <HeaderWithFilter title={"todo today"} isExpanded={isExpanded}/>
                <TodoCard title={"Such a super day"} project={{title:"hehe", color: "#F2994A"}}/>
                <TodoCard title={"Nice title bro"}/>
                <TodoCard title={"This is definitely to looooong"}/>
            </div>
        )
    }
}

TodayView.propTypes = {
    showOptions: PropTypes.bool,
}

export default TodayView