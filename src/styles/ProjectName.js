import styled from 'styled-components'
import {ellipsis} from "polished"
import PropTypes from 'prop-types'
import React from "react"

const Project = props => {
    return (
        <div className={props.className}>{props.project ? props.project.title : 'Inbox'}</div>
    )
}

const ProjectName = styled(Project)`
        background-color: ${props => props.project ? props.project.color : props.theme.grey};
        color: ${props => props.theme.whitePerl};
        font-weight: ${props => props.theme.fontWeightBold};
        border-radius: ${props => (props.radius && "5px 5px 0 0") || "0"};
        text-align: center;
        transform:
        translateX(-${props => props.width / 2 - props.height / 2}rem)
        translateY(${props => props.width / 2 - props.height / 2}rem)
        rotate(-90deg);
        height: ${props => props.height}rem;
        width: ${props => props.width}rem;
        ${ellipsis('100%')};
        padding: ${props => props.theme.padding.s} ${props => props.theme.padding.s} 0;
        display: block;
`

ProjectName.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string,
        color: PropTypes.string,
        title: PropTypes.string
    }),
    /*in rem*/
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    radius: PropTypes.bool
}

export default ProjectName