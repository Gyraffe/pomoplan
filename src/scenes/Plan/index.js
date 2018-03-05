import React from 'react'
import {Col, Row} from "reactstrap"
import {AddingButton} from "./components/styles"
import Calendar from "../Calendar"

class Plan extends React.Component {
    render() {
        return (
            <Row className={"mt-3"}>
                <Col xs={"12"} className={"mb-4"}>
                    <AddingButton/>
                </Col>
                <Col xs={"12"} lg={"9"} className={"mb-2"}>
                    <Calendar/>
                </Col>
                <Col xs={"12"} lg={"3"} className={"d-none d-lg-flex"}>
                    hihihi
                </Col>
            </Row>
        )
    }
}

export default Plan