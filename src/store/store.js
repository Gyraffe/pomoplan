import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {compose, createStore, applyMiddleware} from 'redux'
import {firebase} from "../firebase/index"
import thunk from 'redux-thunk'
import pomoPlan from "./state"
import {loadState, saveState} from "../localStorage"
import {composeWithDevTools} from "redux-devtools-extension"

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
    composeWithDevTools(
       applyMiddleware(thunk.withExtraArgument(getFirebase)))
)

store.subscribe(()=>{
    saveState({
        timer: store.getState().timer,
    })
})

export default store