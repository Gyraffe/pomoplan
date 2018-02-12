import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store/store"
import mainTheme from "./styles"
import {Provider} from 'react-redux'
import {ThemeProvider} from "styled-components"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
      <ThemeProvider theme={mainTheme}>
          <App/>
      </ThemeProvider>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
