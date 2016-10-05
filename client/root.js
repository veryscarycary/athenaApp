import React, {Component} from 'react';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import App from './components/App';
import Articles from './components/Articles/Articles';
import Tickets from './components/Tickets/TicketDisplay';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import 'styles/stylesheet.css';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    loggerMiddleware,
    promiseMiddleware()
  )
);

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    );
  }
}
