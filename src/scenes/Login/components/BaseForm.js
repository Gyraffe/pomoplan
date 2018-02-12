import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'
import {RenderField} from './RenderField'
import {FormButton, FormSuggestion, FormText, FormTitle, MainForm} from "./styles"

const BaseForm = props => {
    const {handleSubmit, submitFunction, submitting, pristine, invalid} = props
    const {type} = props
    const constants = type === 'signIn' ? signIn : signUp
    return (
        <MainForm onSubmit={handleSubmit(submitFunction)}>
            <FormText>
                <FormSuggestion {...constants.suggestionDirection}>{constants.suggestion}</FormSuggestion>
                <FormTitle {...constants.titleDirection}>{constants.title}</FormTitle>
            </FormText>
            <div>
                {(type === 'signUp' && <Field name="username" type="text" component={RenderField} label="username"/>)}
                <Field name="email" type="text" component={RenderField} label="email"/>
                <Field name="password" type="password" component={RenderField} label="password"/>
                {(type === 'signUp' && <Field name="secondPassword" type="password" component={RenderField} label="rewrite password"/>)}

            </div>
            <div className={"mx-4 my-3"}>
                <FormButton color="danger" size="lg" block disabled={invalid || pristine || submitting}>
                    {constants.button}
                </FormButton>
            </div>
        </MainForm>
    )
}

BaseForm.propTypes = {
    type: PropTypes.oneOf(['signUp', 'signIn']).isRequired
}

export default BaseForm

const signUp = {
    suggestion : 'Don\'t have an account?',
    title: 'Sign up!',
    suggestionDirection: 'right',
    titleDirection: 'left',
    button: 'SIGN UP!'
}
const signIn = {
    suggestion : 'Already have an account?',
    title: 'Sign in!',
    suggestionDirection: 'left',
    titleDirection: 'right',
    button: 'SIGN IN!'
}
