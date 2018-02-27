import React from 'react'
import PropTypes from 'prop-types'
import {Content, ExpandButton, Title, Options} from "./styles"
import Icon from "../../../styles/Icon"
import Filter from "./Filter"

const Header = ({isExpanded, handleToggle, title, tags, projects}) => {
    return (
        <Content>
            <Title onClick={handleToggle}>{title}</Title>
            <ExpandButton onClick={handleToggle} expanded={isExpanded}>
                <Icon dark={!isExpanded} icon={"expand_more"}/>
            </ExpandButton>
            <Options expanded={isExpanded}>
                <Filter items={projects}>project</Filter>
                <Filter items={tags}>tag</Filter>
            </Options>
        </Content>

    )
}

Header.propTypes = {
    isExpanded: PropTypes.bool,
    handleToggle: PropTypes.func,
    title: PropTypes.oneOf(['todo today', 'pomo today']).isRequired,
    filters: PropTypes.object,
    tags: PropTypes.array,
    projects: PropTypes.array,
}

export default Header