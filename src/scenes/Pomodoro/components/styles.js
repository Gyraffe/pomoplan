import styled from 'styled-components'
import {clearFix, modularScale, rgba, transparentize} from "polished"
import {Button} from "reactstrap"

const CardTitle = styled.div`
    color: ${props => props.theme.lightBlue};
    font-size: ${modularScale(1.5)};
    font-weight: ${props => props.theme.fontWeightBold};
    margin-bottom: 0.5rem;
`

const Position = styled.div`
    ${clearFix()}
`

const Statistics = styled.div`
line-height: ${modularScale(1.3)};
padding: 0 1.5rem 1rem;
`

const SubTitle = styled.div`
    color: ${props => props.theme.whiteDirty};
    text-align: left;
    font-size: ${modularScale(1.2)};
    font-weight: ${props => props.theme.fontWeightNormal};
    float: left;
`

const Data = styled.div`
    color: ${props => transparentize(0.4, props.theme.lightBlue)};
    font-size: ${modularScale(0.8)};
    text-align: right;
    float: right;
`

const StartPomoButton = styled.button`
    background-color: ${props => props.theme.orange};
    border: 0;
    font-size: ${modularScale(4)};
    font-weight: ${props => props.theme.fontWeightBold};
    padding: 1.2rem 0;
    border-radius: ${props => props.theme.pillBorderRadius};
    width: 100%;
    color: ${props => props.theme.whitePerl};
    cursor: pointer;
    box-shadow: ${props => props.theme.shadow[5]};
    transition-property: box-shadow, background-color, color;
    transition-duration: ${props => props.theme.shadowButtonDur};
    &:active,:hover,:focus{
        background-color: ${props => props.theme.whitePerl};
        color: ${props => props.theme.orange};
        outline: none;
        box-shadow: ${props => props.theme.shadow[11]};
    }
`

export {CardTitle, Position, Statistics, SubTitle, Data, StartPomoButton}