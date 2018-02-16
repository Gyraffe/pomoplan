import styled from 'styled-components'
import PropTypes from 'prop-types'
import {clearFix, modularScale, rem, transparentize} from "polished"

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
    height: 100%;
    max-height: ${rem('144px')};
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

const StartedPomoProgress = styled.div.attrs({
    className: "progress"
})`
    position:relative;
    border: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: ${props => props.theme.gray};
    border-radius: ${props => props.theme.pillBorderRadius};
    box-shadow: ${props => props.theme.shadow[5]};
    transition-property: box-shadow, background-color, color;
    transition-duration: ${props => props.theme.shadowButtonDur};
    transition: width 2s;
    &:active,:hover,:focus{
        outline: none;
        box-shadow: ${props => props.theme.shadow[11]};
    }
`

const Progress = styled.div.attrs({
    className: "progress-bar"
})`
background-color: ${props => props.theme.orange};
width: ${props => (((1 - props.done / props.outOf) * 100))}%;
`

Progress.propTypes = {
    done: PropTypes.number.isRequired,
    outOf: PropTypes.number.isRequired
}

const ProgressLabel = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
align-self: center;
text-shadow: 1px 6px 1px rgba(0,0,0,.1),
           1px 0 5px rgba(0,0,0,.1),
           1px 3px 5px rgba(0,0,0,.2),
           1px 1px 10px rgba(0,0,0,.2),
           1px 2px 20px rgba(0,0,0,.15);
color: ${props => props.theme.whitePerl};
min-width: 100%;
font-size: ${modularScale(5)};
font-weight: ${props => props.theme.fontWeightBold};
`

export {CardTitle, Position, Statistics, SubTitle, Data, StartPomoButton, StartedPomoProgress, ProgressLabel, Progress}