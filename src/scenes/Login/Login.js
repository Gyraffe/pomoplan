import React from 'react'
import {Row} from 'reactstrap'
import {firebaseConnect} from 'react-redux-firebase'
import {doCreateUser, doSignIn} from "../../firebase"
import {ApplicationTitle, EntryForm} from "./components/styles"

class Login extends React.Component {
    render() {
        return (
            <Row noGutters className={"justify-content-around"}>
                <ApplicationTitle xs={"12"}>PomoPlan</ApplicationTitle>
                <EntryForm submitFunction={doSignIn} type={"signIn"} className={"mb-2 mb-md-0"}/>
                <EntryForm submitFunction={doCreateUser} type={"signUp"} className={"mb-2 mb-md-0"}/>
            </Row>
        )
    }
}

export default firebaseConnect()(Login)