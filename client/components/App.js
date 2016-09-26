import React, { PropTypes } from 'react';
import Articles from './Articles/Articles';
import Tickets from './Tickets/TicketDisplay';
import LandingPage from './LandingPage';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';


const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage}>
      <Route path="/articles" component={Articles} />
      <Route path="/tickets" component={Tickets} />
    </Route>
  </Router>
)

export default App;
