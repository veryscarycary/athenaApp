import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { toggleTicketModal } from '../../actions';

import TicketModal from './TicketModal';



const TicketContainer = ({ticket, toggleTicketModal}) => {
  const handleToggleModal = (ticket) => {
    console.log('I WAS CALLED');
    toggleTicketModal(ticket);
  }
  const status = (ticket) => {
    if (ticket.checkedOut) { return 'Open';}
    return ticket.resolved === true ? 'Resolved' : 'Unresolved';
  };

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
      <td>
        <a
          onClick={() => handleToggleModal(ticket)}>
          MoreInfo
        </a>
      </td>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleTicketModal,
}, dispatch)


const Ticket = connect(
  () => ({}),
  mapDispatchToProps
)(TicketContainer);

export default Ticket;
