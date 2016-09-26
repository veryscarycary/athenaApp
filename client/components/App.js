import React, { PropTypes } from 'react';
import Articles from './Articles/Articles';
import LandingPage from './LandingPage';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import MainLayoutContainer from './Tickets/MainLayoutContainer';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage}>
      <Route path="/articles" component={Articles} />
      <Route path="/tickets" component={MainLayoutContainer} />
    </Route>
  </Router>
)

export default App;
