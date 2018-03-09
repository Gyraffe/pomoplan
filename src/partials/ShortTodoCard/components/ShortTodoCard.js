import React from "react"
import {Body, SmallIcon, Title} from "./styles"
import {isOverdue} from "../../../utils/date"

const ShortTodoCard = props => {
    const overdue = !props.completed ? isOverdue(props.moment) : false
    return (
        <Body project={props.project} completed={props.completed}>
        <Title>
            {props.title}
        </Title>
        { overdue && <SmallIcon icon={"warning"}/>}
        </Body>
    )
}

export default ShortTodoCard