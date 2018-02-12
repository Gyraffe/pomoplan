import styled from "styled-components"
import {rgba} from 'polished'
import {NavLink} from "react-router-dom"

const Link = styled(NavLink)`
    font-weight: ${props => props.theme.fontWeightNormal};
    font-size: 1.5em;
    color: ${props => rgba(props.theme.whiteDirty, 0.8)};
    transition-property: color;
    transition-duration: 0.5s;
    &:hover{
        color: ${props => props.theme.whiteDirty};
    }
    &.active{
        color: ${props => rgba(props.theme.orange, 0.8)};
        transition-property: color;
        transition-duration: 0.5s;
        &:hover{
        color: ${props => props.theme.orange};
    }
    }
`

const AppTitle = Link.extend`
    font-size: 2em;
    font-weight: ${props => props.theme.fontWeightThin};
`

export {AppTitle, Link}