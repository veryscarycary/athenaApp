import React from 'react';
import { connect } from 'react-redux';

import Cookies from 'js-cookie';
import { AuthorizedComponent } from 'react-router-role-authorization';

import sessionUtils from '../../utils/sessionUtils';
import TicketDisplay from './TicketDisplay';
import Search from './Search';
import CreateTicket from './CreateTicket';

class MainLayoutContainer extends AuthorizedComponent {
  constructor (props) {
    super(props)

    this.userRoles = JSON.parse(Cookies.get('roles')); //deserialize json array
    this.notAuthorizedPath = '/not-found';
  }

  componentWillMount () {
    // actually needs to run check session with the server instead
    console.log(this.props.sessionId);
    sessionUtils.checkSession();
  }

  render () {
    return (
      <div className='container bg-warning'>
        <div className='row col-md-12'>
          Ticket Home
          <div className='ticketsAndSearch'>
            <Search />
            <TicketDisplay />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  return {
    tickets: store.ticketsReducer.tickets
  };
};

export default connect(mapStateToProps)(MainLayoutContainer);
