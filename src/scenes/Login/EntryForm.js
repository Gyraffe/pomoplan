import React from 'react'
import {SignInForm, SignUpForm} from "./containers"
import PropTypes from 'prop-types'
import {Col} from "reactstrap"

const EntryForm = props => {
    const {type} = props
    return (
        <Col xs={"12"} md={"5"} xl={"4"} className={props.className}>
            {type === 'signIn' ?
                <SignInForm {...props}/>
                :
                <SignUpForm {...props}/>}
        </Col>
    )
}

EntryForm.propTypes = {
    type: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
    className: PropTypes.string
}

export {EntryForm}