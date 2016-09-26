import React from 'react';
import { connect } from 'react-redux';

import Ticket from './Ticket';

class Tickets extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div>
        {this.props.filteredTickets.map(ticket => (
          <Ticket ticket={ticket} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    filteredTickets: store.ticketsReducer.filteredTickets
  };
};

export default connect(mapStateToProps)(Tickets);
