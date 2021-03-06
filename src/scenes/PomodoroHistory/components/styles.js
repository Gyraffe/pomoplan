import styled from 'styled-components'
import Card from '../../../styles/Card'
import {modularScale, transparentize} from "polished"

const History = Card.extend`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.margin.xm};
  max-height: 60vh;
  overflow-y: auto;
`
const DayHeader = styled.div`
  display: flex;
  align-items: center;
`

const DayName = styled.div`
font-size: ${modularScale(2)};
color: ${props => props.theme.orange};
font-weight: ${props => props.theme.fontWeightBold};
padding: ${props => props.theme.padding.m} ${props => props.theme.padding.l};
display: flex;
align-items: center;
`
const DateDisplay = styled.span`
font-size: 0.5em;
color: ${props => transparentize(0.5,props.theme.grey)};
padding-left: ${props => props.theme.padding.s};

`

const PomoCount = styled.div`
margin: 0 ${props => props.theme.margin.xs};
padding: 0 ${props => props.theme.padding.xs};
height: 2rem;
min-width: 2rem;
display: flex;
align-items: center;
justify-content: center;
font-size: ${modularScale(1)};
border: 4px ${props => props.theme.lightBlue} solid;
border-radius: 50%;
font-weight: ${props => props.theme.fontWeightBold};
color: ${props => props.theme.lightBlue};
`

const TimeCount = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0 ${props => props.theme.margin.xs};
padding: 0 ${props => props.theme.padding.xs};
height: 2rem;
min-width: 2rem;
border: 4px ${props => transparentize(0.5, props.theme.lightBlue)} solid;
border-radius: ${props => props.theme.pillBorderRadius};
font-weight: ${props => props.theme.fontWeightBold};
color: ${props => transparentize(0.5, props.theme.lightBlue)};
`
const PomoCard = styled.div`
height: 10rem;
max-width: 12rem;
margin: 0.2rem 0.4rem;
transition-property: box-shadow;
transition-duration: 0.5s;
  &:hover, :focus{
    box-shadow: ${props => props.theme.shadow[3]};
  }
`

const PomoCardContent = styled.div`
    height: inherit;
    width: 80%;
    transform: translateY(-2rem) translateX(2rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`

const PomoTitle = styled.div`
color: black;
font-weight: ${props => props.theme.fontWeightBold};
padding: 0 ${props => props.theme.padding.s};
max-height: 3rem;
flex-grow: 1;
overflow: hidden;
`

const Tags = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
max-height: 6rem;
overflow-y: auto;
`

const Progress = styled.div.attrs({
    className: "progress"
})`
background-color: ${props => props.theme.gray};
height: 20px;
width: 100%;
border-radius: ${props => props.theme.pillBorderRadius};
`

const ProgressBar = styled.div.attrs({
    className: "progress-bar",
})`
background-color: ${props => props.theme.lightBlue};
width: ${props => (((props.done / props.outOf) * 100))}%;
`
const ProgressLabel = styled.div`
display: flex;
position: absolute;
justify-content: center;
align-items: center;
color: ${props => props.theme.whitePerl};
width: 100%;
font-weight: ${props => props.theme.fontWeightBold};
`

const Time = styled.div`
color: ${props => transparentize(0.5, props.theme.lightBlue)};
padding: 0;
`

const TimeAndProgress = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 0 ${props => props.theme.padding.s};
`

const PomosContainer = styled.div`
display: flex;
align-items: center;
overflow-x: auto;
overflow-y: hidden;
margin-bottom: ${props => props.theme.margin.m};
`

export {
    History, DayHeader, DayName, PomoCount, TimeCount, PomoCard, PomoCardContent, Progress, PomoTitle, Tags, Time,
    TimeAndProgress, PomosContainer, ProgressBar, ProgressLabel, DateDisplay
}