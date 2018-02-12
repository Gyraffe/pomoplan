import React from 'react'
import PropTypes from 'prop-types'
import {reduxForm} from 'redux-form'
import {validate} from './formValidation'
import BaseForm from "../components/BaseForm"


let SignInForm = props => {
    return (
        <BaseForm type={'signIn'} {...props}/>
    )
}

SignInForm = reduxForm({
    form: 'signIn',
    validate
})(SignInForm)

SignInForm.propTypes = {
    className: PropTypes.string,
    submitFunction: PropTypes.func.isRequired
}

export {SignInForm}