import Card from '../../styles/Card'
import styled from "styled-components"
import {modularScale} from "polished"
import PropTypes from 'prop-types'

const Content = Card.extend`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
`

const Title = styled.div`
    flex-grow: 1;
    color: ${props => props.theme.lightBlue};
    font-size: ${modularScale(1.4)};
    font-weight: ${props => props.theme.fontWeightBold};
    padding: 0.5rem 0 0.5rem 1rem;
`

const ExpandButton = styled.div`
    border-top-right-radius: ${props => props.theme.cardBorderRadius};
    border-bottom-right-radius: ${props => !props.expanded && props.theme.cardBorderRadius};
    font-size: ${modularScale(1.4)};
    background-color: ${props => (props.expanded && props.theme.grey) || 'inherit'};
    flex-shrink: 1;
    height: 100%;
    cursor: pointer;
    padding: 0.5rem 0;
`

ExpandButton.propTypes = {
    expanded: PropTypes.bool
}

const Options = styled.div`
    flex-basis: 100%;
    display: ${props => props.expanded ? 'flex' : 'none' };
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    border-top: ${props => props.theme.grey} 1px solid;
    padding: 0.5rem;
`
Options.propTypes = {
    expanded: PropTypes.bool
}

const Option = styled.div`
    color: ${props => props.theme.lightBlue};
    text-align: center;
    font-size: ${modularScale(1.2)};
    font-weight: ${props => props.theme.fontWeightNormal};
`

export {Content, Title, ExpandButton, Options, Option}