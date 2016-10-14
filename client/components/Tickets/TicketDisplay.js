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
      <div className='ticket-container'>
      <div className="ticket-table-container">
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
            <th className="table-issuePreview">
              Issue
            </th>
            <th className="table-product">
              Product
            </th>
            <th className='table-customerId'>
              Customer Id
            </th>
            <th className='table-moreInfo'>
              Details
            </th>
            <th className='table-status'>
              Status
            </th>
            <th className='table-open-button'></th>
            </tr>
          </thead>
          <tbody>
            {this.props.filteredTickets.map(ticket => (
              <Ticket ticket={ticket} />
            ))}
          </tbody>
        </table>
        <Link to={'/tickets/create'}>
          <button className='ticket-create'>
            <i className="material-icons">add</i>
          </button>
        </Link>
        { this.props.hidden ? null : <TicketModal ticket={this.props.ticket}/>}
        </div>
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
