import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './styles.css';
import { getInitialState } from './services';
import { GRID_SIZE } from './constants';

const defaults = getInitialState(GRID_SIZE);
const store = createStore(reducers, defaults);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
