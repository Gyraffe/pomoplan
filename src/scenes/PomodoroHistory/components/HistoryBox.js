import React from "react"
import PropTypes from 'prop-types'
import {History} from "./styles"
import DayWithHistory from "../containers/DayWithHistory"

const HistoryBox = ({historyDays}) => {
    return (
        <History>
            {historyDays ?
                historyDays.map(day => (<DayWithHistory key={day} day={day}/>))
                :
                ""}
        </History>
    )
}

HistoryBox.propTypes = {
    historyDays: PropTypes.array
}

export default HistoryBox