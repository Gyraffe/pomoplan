import React from 'react'
import PropTypes from 'prop-types'
import PomoProgressCircle from "../../PomoProgressCircle/index"
import {Content, TagsAndText, Description, Title, RightPanel, ExpandButton} from "./styles"
import TodoCardTags from "./Tags"
import Icon from "../../../styles/Icon"

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
            <RightPanel className={"p-1"}>
                <PomoProgressCircle done={pomoDone + (isMarked && 1) || pomoDone} outOf={pomoDuration} radius={18} border={3}/>
                <ExpandButton>
                    <Icon icon={"more_horiz"} dark/>
                </ExpandButton>
            </RightPanel>
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