import React from 'react';
import { connect } from 'react-redux';

import TicketDisplay from './TicketDisplay';
import Search from './Search';
import CreateTicket from './CreateTicket';

class MainLayoutContainer extends React.Component {
  constructor (props) {
    super(props)


  }

  render () {
    return (
      <div>
        Ticket Home
        <div className='ticketsAndSearch'>
          <TicketDisplay />
          <Search />
        </div>
        <CreateTicket />
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
