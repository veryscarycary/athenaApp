import React from 'react';
import { connect } from 'react-redux';

const Ticket = ({ticket}) => (
  <tr>
    <td>
      {ticket}
    </td>
    <td>
      Issue With Blue Screen
    </td>
    <td>
      IBM Printer
    </td>
    <td>
      1432
    </td>
    <td className='badge'>
      Open
    </td>
  </tr>
);

export default Ticket;
