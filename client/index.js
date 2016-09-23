import React, { PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import Provider from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
//  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
)


render(
  <App />,
  document.getElementById('entry')
)
