import React from 'react'
import {PomosContainer} from "./styles"
import PropTypes from "prop-types"
import HistoryCard from "../containers/HistoryCard"
import uniqid from "uniqid"

const DayPomos = ({dayHistory}) => {
    return (
        <PomosContainer>
            {dayHistory ?
                dayHistory.reverse().map(pomo =>
                    <HistoryCard key={uniqid()} {...pomo} />)
                :
                ""}
        </PomosContainer>
    )
}

DayPomos.propTypes = {
    dayHistory: PropTypes.array
}

export default DayPomos