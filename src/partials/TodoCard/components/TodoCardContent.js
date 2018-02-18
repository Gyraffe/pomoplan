import React from 'react'
import PropTypes from 'prop-types'
import PomoProgressCircle from "../../PomoProgressCircle/index"
import {Content, TagsAndText, Description, Title} from "./styles"
import TodoCardTags from "./Tags"

const TodoCardContent = ({tagsExpanded, tags, title, description, pomoDone, pomoDuration, isMarked}) => {
    return (
        <Content>
            <TagsAndText>
                <TodoCardTags expanded={tagsExpanded} tags={tags}/>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
            </TagsAndText>
            <div className={"p-1"}>
                <PomoProgressCircle done={pomoDone + (isMarked && 1) || pomoDone} outOf={pomoDuration} radius={18} border={3}/>
            </div>
        </Content>
    )
}

TodoCardContent.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    pomoDuration: PropTypes.number,
    pomoDone: PropTypes.number,
    tags: PropTypes.array,
    tagsExpanded: PropTypes.bool,
    isMarked: PropTypes.bool,
}
export default TodoCardContent