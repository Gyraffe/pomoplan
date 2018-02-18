import React from "react"
// import PropTypes from 'prop-types'
import {History} from "./styles"
import Day from "./Day"

const HistoryBox = (props) => {
    return (
        <History>
            {props.history ?
                Object.keys(props.history).map(day => (<Day key={day} day={day} history={props.history[day]}/>))
                :
                ""}
        </History>
    )
}

export default HistoryBox