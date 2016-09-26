import React, { PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import Articles from './components/Articles/Articles';
import Tickets from './components/Tickets/TicketDisplay';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('entry')
)
