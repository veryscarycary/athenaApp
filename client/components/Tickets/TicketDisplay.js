import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ticketUtils from '../../utils/ticketUtils';
import { Link } from 'react-router';
import TicketModal from './TicketModal';

import * as ticketActionCreators from '../../actions/index';
import Ticket from './Ticket';

class TicketDisplay extends React.Component {
  constructor (props) {
    super(props);

  };

  componentWillMount () {
    // // set tickets in state
    this.props.loadTicketState();
  }

  render () {
    return (
      <div className='col-xs-6'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
            <th>
              #
            </th>
            <th>
              Issue
            </th>
            <th>
              Product
            </th>
            <th>
              Customer Id
            </th>
            <th>
              Details
            </th>
            <th>
              Status
            </th>
            </tr>
          </thead>
          <tbody>
            {this.props.filteredTickets.map(ticket => (
              <Ticket ticket={ticket} />
            ))}
          </tbody>
        </table>
        <Link to={'/tickets/create'}>
          <button>
            Create ticket
          </button>
        </Link>
        { this.props.hidden ? null : <TicketModal ticket={this.props.ticket}/>}
      </div>
    )
  };
}


const mapStateToProps = function(store) {
  return {
    tickets: store.ticketsReducer.tickets,
    ticket: store.ticketModal.ticket,
    hidden: store.ticketModal.hidden,
    filteredTickets: store.ticketsReducer.filteredTickets
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDisplay);
