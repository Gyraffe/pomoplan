import styled from "styled-components"
import {ellipsis} from "polished"
import PropTypes from "prop-types"
import Icon from "../../../styles/Icon"

export const Body = styled.div`
    width: 90%;
    background-color: ${props => (props.completed && props.theme.whiteDirty) 
    || (props.project && props.project.color) || props.theme.grey};
    color: ${props => props.theme.whitePerl};
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.pillBorderRadius};
    margin: 0 ${props => props.theme.margin.xs};
    padding: 0 ${props => props.theme.padding.s};
`

Body.propTypes = {
    project: PropTypes.object,
    completed: PropTypes.bool,
}

export const Title = styled.div`
    text-align: center;
    ${ellipsis()}
`
export const Count = styled.div`
    text-align: center;
    font-weight: ${props => props.theme.fontWeightBold};
`

export const SmallIcon = Icon.extend`
    font-size: 0.9rem;
`