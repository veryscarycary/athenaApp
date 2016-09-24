import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LandingPage from './LandingPage'
import Articles from './Articles/Articles';
import MainLayoutContainer from './Tickets/MainLayoutContainer';



const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage} />
    <Route path="/articles" component={Articles} />
    <Route path="/tickets" component={MainLayoutContainer} />
  </Router>
)

export default App;
