import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LandingPage from './LandingPage'
import Articles from './Articles/Articles';
import MainLayoutContainer from './Tickets/MainLayoutContainer';
import Login from './Login/LoginContainer';
import Signup from './Signup/SignupContainer';


const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage} />
    <Route path="/articles" component={Articles} />
    <Route path="/tickets" component={MainLayoutContainer} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Router>
)

export default App;
