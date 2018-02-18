import React from 'react'
import PomoCard from "./PomoCard"
import {PomosContainer} from "./styles"
import PropTypes from "prop-types"

const DayPomos = (props) => {
    console.log(props)
    return (
        <PomosContainer>
            {props.history ?
                props.history.reverse().map(task =>
                    <PomoCard key={task.id} {...task} />)
                :
                ""}
        </PomosContainer>
    )
}

DayPomos.propTypes = {
    history: PropTypes.array
}

export default DayPomos