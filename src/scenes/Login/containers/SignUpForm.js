import React from 'react'
import PropTypes from 'prop-types'
import {reduxForm} from 'redux-form'
import {validate, warn} from './formValidation'
import BaseForm from "../components/BaseForm"

let SignUpForm = props => {
    return (
        <BaseForm type={'signUp'} {...props}/>
    )
}

SignUpForm.propTypes = {
    className: PropTypes.string,
    submitFunction: PropTypes.func.isRequired
}


SignUpForm = reduxForm({
    form: 'signUp',
    validate,
    warn,
})(SignUpForm)


export {SignUpForm}