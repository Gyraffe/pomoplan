import Card from '../../../styles/Card'
import styled from "styled-components"
import {ellipsis, modularScale} from "polished"
import PropTypes from 'prop-types'
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap"

const Content = Card.extend`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    cursor: pointer;
`

const Title = styled.div`
    flex-grow: 1;
    color: ${props => props.theme.lightBlue};
    font-size: ${modularScale(1.4)};
    font-weight: ${props => props.theme.fontWeightBold};
    padding: ${props => props.theme.padding.m} 0 ${props => props.theme.padding.m} ${props => props.theme.padding.l};
`

const ExpandButton = styled.div`
    border-top-right-radius: ${props => props.theme.cardBorderRadius};
    border-bottom-right-radius: ${props => !props.expanded && props.theme.cardBorderRadius};
    font-size: ${modularScale(1.4)};
    background-color: ${props => (props.expanded && props.theme.grey) || 'inherit'};
    flex-shrink: 1;
    height: 100%;
    padding: ${props => props.theme.padding.m} 0;
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
    padding: ${props => props.theme.padding.m};
`
Options.propTypes = {
    expanded: PropTypes.bool
}

const OptionTitle = styled(DropdownToggle).attrs({
    tag: 'div'
})`
    color: ${props => props.theme.lightBlue};
    background-color: ${ props => props.theme.whitePerl};
    cursor: pointer;
    text-align: center;
    font-size: ${modularScale(1.2)};
    font-weight: ${props => props.theme.fontWeightNormal};
    transition: color 0.4s;
    &:active, &:focus, &:hover{
    background-color: ${ props => props.theme.whitePerl};
    color: ${props => props.theme.orange};
    border: none;
    outline: none;
    }
`

const Option = styled(UncontrolledDropdown)`
    flex-basis: 50%;
`

const Dropdown = styled(DropdownMenu)`
    background-color: ${props => props.theme.whitePerl};
    width: 100%;
    transition: box-shadow 0.4s;
    text-align: center;
    box-shadow: ${props => props.theme.shadow[5]};
    &:hover, :focus {
        box-shadow: ${props => props.theme.shadow[8]};
    }
`

const DropdownOption = styled(DropdownItem)`
    background-color: ${props => props.color};
    ${ellipsis()};
    color: ${ props => props.theme.whitePerl};
`

export {Content, Title, ExpandButton,DropdownOption,  Option, Options, OptionTitle, Dropdown}