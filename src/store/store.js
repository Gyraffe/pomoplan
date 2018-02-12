import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {compose, createStore, applyMiddleware} from 'redux'
import {firebase} from "../firebase/index"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import pomoPlan from "./state"

const config = {
    userProfile: 'users',
    enableLogging: false,
    attachAuthIsReady: true,
    updateProfileOnLogin: false,
    firebaseStateName: 'firebase'
}

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, config)
)(createStore)

const store = createStoreWithFirebase(
    pomoPlan,
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    applyMiddleware(logger)
)

export default store