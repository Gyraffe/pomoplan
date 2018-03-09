import React from 'react'
import PropTypes from 'prop-types'
import {Col, Row} from "reactstrap"
import {AddingButton} from "./styles"
import Calendar from "../../Calendar"
import DayView from "../../DayView"

const Plan = ({dateSelected}) => {
    return (
        <Row className={"mt-3"}>
            <Col xs={"12"} className={"mb-4"}>
                <AddingButton/>
            </Col>
            <Col xs={"12"} lg={"8"} className={"mb-2"}>
                <Calendar/>
            </Col>
            <Col xs={"12"} lg={"4"}>
                <DayView date={dateSelected}/>
            </Col>
        </Row>
    )
}

Plan.propTypes = {
    dateSelected: PropTypes.string.isRequired
}

export default Plan