import React, {Component, PropTypes} from 'react';
import Articles from './Articles/Articles';
import LandingPage from './LandingPage';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import MainLayoutContainer from './Tickets/MainLayoutContainer';
import NotFoundComponent from './NotFoundComponent';
import Login from './Login/LoginContainer';
import Signup from './Signup/SignupContainer';
import DashboardContainer from './AdminDashboard/DashboardContainer';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      {/*onEnter={someAuthCheck}> for "/"*/}
        <Route path="/" component={LandingPage}>
          <Route path="/articles" component={Articles} />
          <Route path="/tickets" component={MainLayoutContainer} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    );
  }
}
