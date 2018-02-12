import React from 'react'
import Card from "../../../styles/Card"
import PropTypes from 'prop-types'
import {CardTitle, Data, Position, Statistics, SubTitle} from "./styles"

const DailyStats = props => {
    return (
        <Card shadow={4}>
            <CardTitle>{props.status} today</CardTitle>
            <Statistics>
                <Position>
                    <SubTitle>{"TIME:"}</SubTitle>
                    <Data>{"1:30"}</Data>
                </Position>
                <Position>
                    <SubTitle>{"COUNT:"}</SubTitle>
                    <Data>{"1:30"}</Data>
                </Position>
                <Position>
                    <SubTitle>{"BREAKS:"}</SubTitle>
                    <Data>{"2"}</Data>
                </Position>
                <Position>
                    <SubTitle>{"TAGS:"}</SubTitle>
                    <Data>{"some tags"}</Data>
                </Position>
            </Statistics>
        </Card>
    )
}

DailyStats.propTypes = {
    status: PropTypes.oneOf(['done', 'left']).isRequired
}

export default DailyStats