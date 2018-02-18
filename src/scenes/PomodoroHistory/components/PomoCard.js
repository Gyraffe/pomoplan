import React from 'react'
import ProjectName from "../../../styles/ProjectName"
import {
    PomoCard as PomodoroCard, PomoCardContent as Content, PomoTitle, Tags, Time, TimeAndProgress
} from "./styles"
import Tag from "../../../partials/Tag"
import PomoProgressLine from "./PomoProgressLine"
import PropTypes from 'prop-types'

const PomoCard = ({project, title, tags, timeStarted, timeEnded, pomoDone, pomoDuration}) => {
    return (
        <PomodoroCard>
            <ProjectName height={2} width={10} project={project}/>
            <Content>
                <PomoTitle>{title}</PomoTitle>
                <TimeAndProgress>
                    <Time>{timeStarted + " - " + timeEnded}</Time>
                    <PomoProgressLine done={pomoDone} outOf={pomoDuration}/>
                </TimeAndProgress>
                <Tags>
                    {tags ?
                        tags.map(tag => (
                            <Tag key={tag.id} {...tag}/>
                        ))
                        : ''}
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
    tags: PropTypes.array,
    title: PropTypes.string,
    timeStarted: PropTypes.string,
    timeEnded: PropTypes.string,
    pomoDone: PropTypes.number,
    pomoDuration: PropTypes.number
}

export default PomoCard