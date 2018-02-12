import React from 'react'
import PropTypes from 'prop-types'
import {Content, ExpandButton, Title, Options, Option} from "./styles"
import Icon from "../../styles/Icon"

const HeaderWithFilter = ({isExpanded, title}) => {
    return (
        <Content>
            <Title>{title}</Title>
            <ExpandButton expanded={isExpanded}>
                <Icon dark={!isExpanded} icon={"expand_more"}/>
            </ExpandButton>
            <Options expanded={isExpanded}>
                <Option>project</Option>
                <Option>pomo count</Option>
                <Option>tag</Option>
            </Options>
        </Content>

    )
}

HeaderWithFilter.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}

export default HeaderWithFilter