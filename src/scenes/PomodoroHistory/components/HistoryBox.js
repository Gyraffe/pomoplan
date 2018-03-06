import React from "react"
import PropTypes from 'prop-types'
import {History} from "./styles"
import DayWithHistory from "../containers/DayWithHistory"
import uniqid from "uniqid"

const HistoryBox = ({historyDays}) => {
    return (
        <History>
            {historyDays ?
                historyDays.map(day => (<DayWithHistory key={uniqid()} day={day}/>))
                :
                ""}
        </History>
    )
}

HistoryBox.propTypes = {
    historyDays: PropTypes.array
}

export default HistoryBox