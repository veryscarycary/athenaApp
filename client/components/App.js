import React, {Component, PropTypes} from 'react';
import Articles from './Articles/Articles';
import AppContainer from './AppContainer';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import MainLayoutContainer from './Tickets/MainLayoutContainer';
import NotFoundComponent from './NotFoundComponent';
import Home from './Home/HomeContainer';
import Login from './Login/LoginContainer';
import Signup from './Signup/SignupContainer';
import DashboardContainer from './AdminDashboard/DashboardContainer';
import SettingsContainer from './Settings/SettingsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import TicketDetailsPage from './TicketPage/TicketDetailsPage';
import ArticleViewPage from './ArticleViewPage/ArticleViewPage';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={Home} />
          <Route path="/articles" component={Articles} />
          <Route path="/tickets" authorize={['user', 'admin']} component={MainLayoutContainer} />
          <Route path="/dashboard" authorize={['admin']} component={DashboardContainer} />
          <Route path="/settings" authorize={['admin']} component={SettingsContainer} />
          <Route path="/tickets/:id" component={TicketDetailsPage} />
          <Route path="/articles/:id" component={ArticleViewPage} />
          <Route path="/profile" authorize={['user', 'admin']} component={ProfileContainer} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFoundComponent} />
      </Router>
    );
  }
}
