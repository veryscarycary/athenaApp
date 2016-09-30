import React from 'react';
import { connect } from 'react-redux';

import TicketModal from './TicketModal';

const resolved = (ticket) => {
  return ticket.resolved === true ? 'Resolved' : 'Unresolved';
};

const Ticket = ({ticket}) => (
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
    <td className='badge'>
      {resolved(ticket)}
    </td>
  </tr>
);

export default Ticket;
