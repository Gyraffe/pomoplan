import styled from 'styled-components'
import Card from '../../../styles/Card'
import {modularScale, rem, transparentize} from "polished"

const History = Card.extend`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`
const DayHeader = styled.div`
  display: flex;
  align-items: center;
`

const DayName = styled.div`
font-size: ${modularScale(2)};
color: ${props => props.theme.orange};
font-weight: ${props => props.theme.fontWeightBold};
padding: 0.5rem 1rem;
`

const PomoCount = styled.div`
margin: 0 ${rem('2px')};
padding: 0 ${rem('2px')};
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
margin: 0 ${rem('2px')};
padding: 0 ${rem('2px')};
height: 2rem;
min-width: 2rem;
border: 4px ${props => transparentize(0.5, props.theme.lightBlue)} solid;
border-radius: ${props => props.theme.pillBorderRadius};
font-weight: ${props => props.theme.fontWeightBold};
color: ${props => transparentize(0.5, props.theme.lightBlue)};
`


export {History, DayHeader, DayName, PomoCount, TimeCount}