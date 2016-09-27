import React from 'react';
import { connect } from 'react-redux';

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
    <td className='badge'>
      Resolved
    </td>
  </tr>
);

export default Ticket;
