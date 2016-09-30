import React from 'react';
import { connect } from 'react-redux';

import EditTicketForm from './EditTicketForm';

const ticketModalInfo = function (ticket) {
  var ticketInfo = [];

  for (var key in ticket) {
    ticketInfo.push([key, ticket[key]]);
  }

  return ticketInfo;
};

const editTicket = function () {

};

const deleteTicket = function () {

};

const TicketModal = ({ticket}) => (
    <td>
      <a href={`#openModal${ticket._id}`}>More Info</a>

      <div id={`openModal${ticket._id}`} className="modalDialog">
        <div>
          <a href="#closeModal" title="Close" className="closeModal">X</a>
          <h2>Ticket Details</h2>
          <p>
            {ticketModalInfo(ticket).map(ticketInfo => (
              <span id={`preview${ticketInfo[0]}`}>{ticketInfo.join(': ')}<br /></span>
            ))}
          </p>
          <button className='btn btn-default' data-toggle='collapse' data-target={`#editTicket${ticket._id}`}>Edit Ticket</button>
          <button className='btn btn-default' name='delete'>Delete Ticket</button>

          <div className='collapse' id={`editTicket${ticket._id}`}>
            <EditTicketForm className='collapse' />
          </div>
        </div>
      </div>
    </td>
);

export default TicketModal;
