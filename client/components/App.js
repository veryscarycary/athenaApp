import React, { PropTypes } from 'react';
import Articles from './Articles/Articles';
import AppContainer from './AppContainer';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import MainLayoutContainer from './Tickets/MainLayoutContainer';
import NotFoundComponent from './NotFoundComponent';
import Home from './Home/HomeContainer';
import Login from './Login/LoginContainer';
import Signup from './Signup/SignupContainer';
import Title from './AdminDashboard/Title';
import DashboardContainer from './AdminDashboard/DashboardContainer';


const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/tickets" component={MainLayoutContainer} />
      <Route path="/dashboard" authorize={['admin']} component={DashboardContainer} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="*" component={NotFoundComponent} />
  </Router>
)

export default App;
