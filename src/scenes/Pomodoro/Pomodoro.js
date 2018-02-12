import React from 'react'
import {Col, Row} from "reactstrap"
import StartButton from './StartButton'
import DoneToday from "./containers/DoneToday"
import LeftToday from "./containers/LeftToday"
import TodayView from "../TodayView"

class Pomodoro extends React.Component {

    render() {
        return (
            <Row className={"mt-3"}>
                <Col xs={"12"} lg={"4"} className={" mb-2"}>
                    <StartButton/>
                </Col>
                <Col xs={"12"} md={"6"} lg={"4"} className={"mb-2 mb-md-0"}>
                    <DoneToday/>
                </Col>
                <Col xs={"12"} md={"6"} lg={"4"} className={""}>
                    <LeftToday/>
                </Col>
                <Col xs={"12"} lg={"4"} className={" my-2"}>
                    <TodayView/>
                </Col>
                <Col xs={"12"} lg={"8"} className={"border"}> Hi</Col>
            </Row>
        )
    }
}

export default Pomodoro