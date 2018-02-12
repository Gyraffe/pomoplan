import React from 'react'
import PropTypes from 'prop-types'
import PomoProgressCircle from "../../PomoProgressCircle/index"
import {Content, TagsAndText, Description, Title} from "./styles"
import TodoCardShortTags from "./Tags"

const TodoCardContent = props => {
    return (
        <Content align={'start'} justify={'space-between'}>
            <TagsAndText column align={'start'} justify={'flex-start'}>
                <TodoCardShortTags/>
                <Title className={"px-3 mw-100 text-truncate"}>
                    {props.title}
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in mi ut elit faucibus
                    aliquet. Maecenas non facilisis dolor, id pretium ex. Integer nec ligula pharetra, consequat
                    ante facilisis, bibendum est.
                </Description>
            </TagsAndText>
            <div className={"p-1"}>
                <PomoProgressCircle isMouseOverProgress done={5} outOf={5} radius={18} border={3}/>
            </div>
        </Content>
    )
}

TodoCardContent.propTypes = {
    title: PropTypes.string.isRequired,
    pomoDuration: PropTypes.number,
    pomoDone: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string)
}
export default TodoCardContent