import React from 'react';
import { connect } from 'react-redux';

import TicketModal from './TicketModal';

const status = (ticket) => {
  if (ticket.checkedOut) { return 'Open';}
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
    {ticket.checkedOut ?
      <td className='badge openTicketColor'>
        {status(ticket)}
      </td>
      :
      <td className='badge'>
        {status(ticket)}
      </td>
    }
  </tr>
);

export default Ticket;
