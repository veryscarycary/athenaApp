import React from 'react';
import { connect } from 'react-redux';

import TicketModal from './TicketModal';


const Ticket = ({ticket}) => (
  <tr>
    <td>
    </td>
    <td>
      {ticket.issue}
    </td>
    <td>
      Computer
    </td>
    <td>
      {ticket.customerId}
    </td>
    <TicketModal ticket={ticket} />
    <td className='badge'>
      Resolved
    </td>
  </tr>
);

export default Ticket;
