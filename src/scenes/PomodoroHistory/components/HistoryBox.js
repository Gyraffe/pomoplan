import React from "react"
import PropTypes from 'prop-types'
import {History} from "./styles"
import Day from "./Day"

const HistoryBox = ({history}) => {
    return (
        <History>
            {history ?
                Object.keys(history).map(day => (<Day key={day} day={day} dayHistory={history[day]}/>))
                :
                ""}
        </History>
    )
}

HistoryBox.propTypes = {
    history: PropTypes.object
}

export default HistoryBox