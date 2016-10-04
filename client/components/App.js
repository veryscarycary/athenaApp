import React, { PropTypes } from 'react';
import Articles from './Articles/Articles';
import LandingPage from './LandingPage';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import MainLayoutContainer from './Tickets/MainLayoutContainer';
import Login from './Login/LoginContainer';
import Signup from './Signup/SignupContainer';
import DashboardContainer from './AdminDashboard/DashboardContainer';


const App = () => (
  <Router history={browserHistory}>
  {/*onEnter={someAuthCheck}> for "/"*/}
    <Route path="/" component={LandingPage}>
      <Route path="/articles" component={Articles} />
      <Route path="/tickets" component={MainLayoutContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Router>
)

export default App;
