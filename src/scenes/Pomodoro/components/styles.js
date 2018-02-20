import styled from 'styled-components'
import {clearFix, modularScale, transparentize} from "polished"

const CardTitle = styled.div`
    color: ${props => props.theme.lightBlue};
    font-size: ${modularScale(1.5)};
    font-weight: ${props => props.theme.fontWeightBold};
    margin-bottom: ${props => props.theme.margin.l};
`

const Position = styled.div`
    ${clearFix()}
`

const Statistics = styled.div`
line-height: ${modularScale(1.3)};
padding: 0 ${props => props.theme.padding.xl} ${props => props.theme.padding.l};
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

export {
    CardTitle, Position, Statistics, SubTitle, Data
}