import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// import components
import MainLayoutContainer from './components/MainLayoutContainer';
import TicketDisplay from './components/TicketDisplay';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={TicketDisplay} />
  </Router>
);