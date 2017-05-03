import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './styles.css';

const store = createStore(reducers);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
