import React from "react"
// import PropTypes from 'prop-types'
import {History} from "./styles"
import Day from "./Day"

const HistoryBox = () => {
    return (
        <History>
            <Day day={'today'} pomos={'5'} time={"2:30"}/>
            <Day day={'yesterday'} pomos={'9'} time={"3:57"}/>
        </History>
    )
}

export default HistoryBox