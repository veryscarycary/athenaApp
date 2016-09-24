import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as ticketActionCreators from '../../actions/index';
import Tickets from './Tickets';

class TicketDisplay extends React.Component {
  constructor (props) {
    super(props);

  };

  componentWillMount () {
    // set tickets in state
    this.props.loadTicketState(['ticket1', 'ticket2', 'ticket3']);
  }

  componentDidMount () {
    // set starting value of filteredTickets to equal tickets
    this.props.loadFilteredTicketState(['ticket1', 'ticket2', 'ticket3']);
  }

  render () {
    return (
      <div id='ticketWindow'>
      Ticket Window!
        <Tickets />
      </div>
    )
  };
}

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.ticketsReducer.tickets,
    filteredTickets: store.ticketsReducer.filteredTickets
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDisplay);
