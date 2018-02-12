import styled from 'styled-components'
import {ellipsis, modularScale} from "polished"
import Card from "../../../styles/Card"

const Tags = styled.div`
    padding: 0.25rem;
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
    padding: 0 1rem;
`

const Title = styled.div`
    font-weight: ${props => props.theme.fontWeightBold};
    color: #000;
    font-size: ${modularScale(1)};
    ${ellipsis('100%')};
`

const FixedCard = styled(Card)`
    height: ${props => props.theme.cardHeight};
    margin: ${props => props.theme.cardMargin};
`

export {Tags, Content, TagsAndText, Description, Title, FixedCard}