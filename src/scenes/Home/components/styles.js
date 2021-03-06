import Card from "../../../styles/Card"
import {modularScale} from 'polished'
import styled from "styled-components"
import {rgba} from "polished"
import {Col} from "reactstrap"

export const MenuOptionCard = Card.extend`
    font-weight:  ${props => props.theme.fontWeightBold};
    min-height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${props => props.theme.padding.large};
    font-size: ${modularScale(4)};
    text-decoration: none;
    color: ${props => props.important ? props.theme.orange : props.theme.lightBlue};
`

export const EntryText = styled(Col)`
    color: ${props => props.theme.whitePerl};
    text-align: center;
`
export const HomeScreenTitle = styled.span`
    color: ${props => props.theme.whitePerl};
    font-weight: ${props => props.theme.fontWeightNormal};
    font-size: ${modularScale(5)};
`
export const HomeScreenQuestion = styled.span`
    font-size: ${modularScale(3)};
    font-weight: ${props => props.theme.fontWeightThin};
    color: ${props => rgba(props.theme.whitePerl, 0.5)};
`

export const HomeScreenDate = styled.span`
    color: ${props => rgba(props.theme.whitePerl, 0.8)};
    transition-property: color;
    transition-duration: 1s;
    &:hover, :focus{
        color: ${props => rgba(props.theme.orange, 1)};
    }
`
