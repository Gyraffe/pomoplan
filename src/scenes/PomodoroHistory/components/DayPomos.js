import React from 'react'
import {PomosContainer} from "./styles"
import PropTypes from "prop-types"
import HistoryCard from "../containers/HistoryCard"

const DayPomos = ({dayHistory}) => {
    return (
        <PomosContainer>
            {dayHistory ?
                dayHistory.reverse().map(task =>
                    <HistoryCard key={task.id} {...task} />)
                :
                ""}
        </PomosContainer>
    )
}

DayPomos.propTypes = {
    dayHistory: PropTypes.array
}

export default DayPomos