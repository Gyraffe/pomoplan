import {firebase} from './firebase'
import {SubmissionError} from "redux-form"

const createNewUser = ({email, password, username}) => {
    return firebase.createUser(
        {email, password},
        {username, email}
    )
}

export function doCreateUser(values) {
    const password = values.password
    const email = values.email
    const username = values.username
    return createNewUser({email, password, username})
        .catch(function(error) {
            const errorCode = error.code
            if(errorCode === 'auth/email-already-in-use') {
                throw new SubmissionError({
                    email: 'email is used',
                })
            }
            if(errorCode === 'auth/weak-password') {
                throw new SubmissionError({
                    password: 'weak password',
                })
            }
            if(errorCode === 'auth/auth/invalid-email') {
                throw new SubmissionError({
                    email: 'invalid email',
                })
            }
        })
}

export function doSignIn(values) {
    const credentials = {
        email: values.email,
        password: values.password
    }
    return firebase.login(credentials)
        .catch(function(error) {
            const errorCode = error.code
            if(errorCode === 'auth/invalid-email') {
                throw new SubmissionError({
                    email: 'invalid email',
                })
            }
            if(errorCode === 'auth/user-disabled') {
                throw new SubmissionError({
                    email: 'weak password',
                })
            }
            if(errorCode === 'auth/wrong-password') {
                throw new SubmissionError({
                    password: 'wrong password',
                })
            }
            if(errorCode === 'auth/user-not-found') {
                throw new SubmissionError({
                    email: 'user not found',
                })
            }
        })
}