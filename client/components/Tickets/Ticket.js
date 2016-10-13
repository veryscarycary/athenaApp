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
    <tr className='ticket-list-item'>
      <td className='table-issuePreview'>
        {ticket.issuePreview}
      </td>
      <td className='table-product'>
        {ticket.product}
      </td>
      <td className='table-customerId'>
        {ticket.customerId}
      </td>
      <td className='table-moreInfo'>
        <a
          onClick={() => handleToggleModal(ticket)}>
          More Info
        </a>
      </td >
      {ticket.checkedOut ?
        <td className='badge openTicketColor' className="table-status">
          {status(ticket)}
        </td>
        :
        <td className='badge'>
          {status(ticket)}
        </td>
      }
      <td className='table-open-button'>
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
