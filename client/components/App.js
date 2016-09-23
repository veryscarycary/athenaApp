import React, { PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import LandingPage from './LandingPage'
import Articles from './Articles';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={LandingPage} />
    <Route path="/articles" component={Articles} />
  </Router>
)

export default App;
