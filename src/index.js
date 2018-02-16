import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {render} from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import App from './App'
import {ThemeProvider} from "styled-components"
import mainTheme from "./styles"
import store from "./store/store"
import './index.css'

render(
    <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()