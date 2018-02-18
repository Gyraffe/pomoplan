import styled from "styled-components"
import {Button, Col, Label} from "reactstrap"
import {rem, rgba} from "polished"
import {EntryForm as Form} from "../EntryForm"
import {transparentize} from "polished"
import Card from '../../../styles/Card.js'
import {modularScale} from "polished"

export const FormText = styled.div`
    margin: ${props => props.theme.margin.m};
    color: ${props => props.theme.whitePerl};
`

export const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:  ${props => rem(props.theme.mainFormHeight)};
`

export const FormTitle = styled.h1`
    font-weight: ${props => props.theme.fontWeightBold};
    font-size: ${modularScale(3.5)};
`

export const FormSuggestion = styled.h4`
    font-weight: ${props => props.theme.fontWeightThin};
    color: ${props => rgba(props.theme.whitePerl, 0.8)};
`

export const FormButton = styled(Button)`
    border: ${props => props.theme.whitePerl} 1px solid;
    font-weight: bold;
    color: ${props => props.theme.whitePerl};
    font-size: ${modularScale(2)};
    line-height: 1;
    background-color: ${props => props.theme.orange};
    &.disabled{
    background-color: ${props => props.theme.red};
    border: ${props => props.theme.whitePerl} 1px solid;
    }
    &:hover{
    background-color: ${props => props.theme.red};
    border: ${props => props.theme.whitePerl} 1px solid;
    box-shadow: ${props => props.theme.shadow[4]};
    }
`

const HelpingForm = Card.withComponent(Form)

export const EntryForm = HelpingForm.extend`
    padding: ${props => props.theme.padding.s};
    background: ${props => transparentize(0.8, props.theme.whitePerl)};;
    border: 1px solid #E0E0E0;
`

export const ApplicationTitle = styled(Col)`
    text-align: center;
    padding: ${props => props.theme.padding.xxl} 0 2rem 0;
    color: #F2F2F2;
    font-size: ${modularScale(4)};
    font-weight: 100;
`

export const FieldLabel = styled(Label)`
    padding: 0;
    margin: 0;
    color: #F2F2F2;
    font-weight: 700;
`

export const Icon = styled.i.attrs({
    className: ' material-icons'
})`
    color: ${props => props.error ? props.theme.red : props.theme.orange };
    display: ${props => props.invalid ? 'inline-block' : 'none' };
`