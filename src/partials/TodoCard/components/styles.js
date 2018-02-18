import styled from 'styled-components'
import {ellipsis, modularScale, lighten} from "polished"
import Card from "../../../styles/Card"

const Tags = styled.div`
    padding: ${props => props.theme.padding.s};
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Content = styled.div`
    height: inherit;
    width: 90%;
    transform: translateY(-2rem) translateX(2rem);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const TagsAndText = styled.div`
    width:80%;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
`

const Description = styled.div`
    width: 100%;
    font-weight: ${props => props.theme.fontWeightNormal};
    color: ${props => props.theme.grey};
    height: 4.5em;
    overflow: hidden;
    padding: 0 ${props => props.theme.padding.l};
`

const Title = styled.div`
    font-weight: ${props => props.theme.fontWeightBold};
    color: #000;
    font-size: ${modularScale(1)};
    padding: 0 ${ ({theme: {padding}}) => padding.l};
    ${ellipsis('100%')};
`

const FixedCard = styled(Card)`
    background-color: ${ props => props.isMarked &&
    lighten(0.2, props.theme.orange)};
    height: ${props => props.theme.cardHeight};
    margin: ${props => props.theme.margin.l} 0;
    transition-property: background-color, box-shadow;
`

export {Tags, Content, TagsAndText, Description, Title, FixedCard}