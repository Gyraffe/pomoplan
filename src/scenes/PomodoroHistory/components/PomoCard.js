import React from 'react'
import ProjectName from "../../../styles/ProjectName"
import {
    PomoCard as PomodoroCard, PomoCardContent as Content, PomoTitle, Tags, Time, TimeAndProgress
} from "./styles"
import Tag from "../../../partials/Tag"
import PomoProgressLine from "./PomoProgressLine"
import PropTypes from 'prop-types'

const PomoCard = ({project, title, timeStarted, timeEnded, done, outOf}) => {
    return (
        <PomodoroCard>
            <ProjectName height={2} width={10} project={project}/>
            <Content>
                <PomoTitle>{title}</PomoTitle>
                <TimeAndProgress>
                    <Time>{timeStarted + " - " + timeEnded}</Time>
                        <PomoProgressLine done={done} outOf={outOf}/>
                </TimeAndProgress>
                <Tags>
                    <Tag name={'hello'} color={"#219653"}/>
                    <Tag name={'this'} color={"#EB5757"}/>
                    <Tag name={'also a tag'} color={"#F2C94C"}/>
                </Tags>
            </Content>
        </PomodoroCard>
    )
}

PomoCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        color: PropTypes.string
    }),
    title: PropTypes.string,
    timeStarted: PropTypes.string,
    timeEnded: PropTypes.string,
    done: PropTypes.number,
    outOf: PropTypes.number
}

export default PomoCard