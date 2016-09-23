import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LandingPage from './LandingPage'
import Articles from './Articles';


const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage} />
    <Route path="/articles" component={Articles} />
  </Router>
)

export default App;
