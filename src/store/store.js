import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {compose, createStore, applyMiddleware} from 'redux'
import {firebase} from "../firebase/index"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import pomoPlan from "./state"
import {loadState, saveState} from "../localStorage"

const config = {
    userProfile: 'users',
    enableLogging: false,
    attachAuthIsReady: true,
    updateProfileOnLogin: false,
    firebaseStateName: 'firebase'
}

const persistedState = loadState()

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, config)
)(createStore)

const store = createStoreWithFirebase(
    pomoPlan,
    persistedState,
    applyMiddleware(thunk.withExtraArgument(getFirebase), logger),
)

store.subscribe(()=>{
    saveState({
        timer: store.getState().timer,
    })
})

export default store