import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import TicketModal from './TicketModal';

const status = (ticket) => {
  if (ticket.checkedOut) { return 'Open';}
  return ticket.resolved === true ? 'Resolved' : 'Unresolved';
};

const Ticket = ({ticket}) => {
  return (
    <tr>
      <td>
      </td>
      <td>
        {ticket.issue}
      </td>
      <td>
        {ticket.product}
      </td>
      <td>
        {ticket.customerId}
      </td>
      <TicketModal ticket={ticket} />
      {ticket.checkedOut ?
        <td className='badge openTicketColor'>
          {status(ticket)}
        </td>
        :
        <td className='badge'>
          {status(ticket)}
        </td>
      }
      <td>
        <Link to={`/tickets/${ticket.id}`}>
          <button className="open-ticket">
            Open
          </button>
        </Link>
      </td>
    </tr>
  );
}

//const mapDispatchToProps = (dispatch) => bindActionCreators({
//  getTicketForModal,
//}, dispatch)

export default Ticket;
