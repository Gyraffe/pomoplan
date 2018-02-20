import styled from 'styled-components'
import PropTypes from 'prop-types'
import {modularScale, rem, rgba} from "polished"
export const StartPomoButton = styled.button`
    background-color: ${props => props.theme.orange};
    border: 0;
    font-size: ${modularScale(4)};
    font-weight: ${props => props.theme.fontWeightBold};
    padding: ${props => props.theme.padding.l} 0;
    border-radius: ${props => props.theme.pillBorderRadius};
    width: 100%;
    height: 100%;
    min-height: ${rem('144px')};
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

export const StartedPomoProgress = styled.div.attrs({
    className: "progress"
})`
    position:relative;
    border: 0;
    width: 100%;
    height: 100%;
    min-height: ${rem('144px')};
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

export const Progress = styled.div.attrs({
    className: "progress-bar"
})`
background-color: ${props => props.theme.orange};
width: ${props => (((1 - props.done / props.outOf) * 100))}%;
`

Progress.propTypes = {
    done: PropTypes.number.isRequired,
    outOf: PropTypes.number.isRequired
}

export const ProgressLabel = styled.div`
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

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.whitePerl};
    font-size: ${modularScale(1)};
    font-weight: ${props => props.theme.fontWeightBold};
    padding: ${props => props.theme.padding.l} ${props => props.theme.padding.m};
    border-radius: ${props => props.theme.pillBorderRadius};
    width: 100%;
    height: 100%;
    min-height: ${rem('144px')};
    box-shadow: ${props => props.theme.shadow[5]};
    transition-property: box-shadow;
    transition-duration: ${props => props.theme.shadowButtonDur};
    &:active,:hover,:focus{
        box-shadow: ${props => props.theme.shadow[11]};
    }
`

export const TextInfo = styled.div`
text-align: center;
color: ${props => props.theme.orange};
`

export const Suggestion = styled.span`
    font-size: 0.8em;
    color: ${props => rgba(props.theme.orange, 0.6)};

`
export const Options = styled.div`
    margin-top: ${props => props.theme.margin.l};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const Option = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: ${props => (props.primary && props.theme.lightBlue) || (props.accent && props.theme.orange) ||
    props.theme.grey} 4px solid;
    padding: ${props => props.theme.padding.s};
    color: ${props => props.theme.orange};
`
