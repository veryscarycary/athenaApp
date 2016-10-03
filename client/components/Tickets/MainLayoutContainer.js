import React from 'react';
import { connect } from 'react-redux';

import sessionUtils from '../../utils/sessionUtils';
import TicketDisplay from './TicketDisplay';
import Search from './Search';
import CreateTicket from './CreateTicket';

class MainLayoutContainer extends React.Component {
  constructor (props) {
    super(props)


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
            <TicketDisplay />
            <Search />
          </div>
          <div className='col-md-12'>
            <CreateTicket />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.ticketsReducer.tickets
  };
};

export default connect(mapStateToProps)(MainLayoutContainer);
