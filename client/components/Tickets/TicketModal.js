import React from 'react';
import { connect } from 'react-redux';

const ticketModalInfo = function (ticket) {
  var ticketInfo = [];

  for (var key in ticket) {
    ticketInfo.push(`${key}: ${ticket[key]}`)
  }

  return ticketInfo;
};

const editTicket = function () {

};

const deleteTicket = function () {

};

const TicketModal = ({ticket}) => (
    <td>
      <a href="#openModal">More Info</a>

      <div id="openModal" className="modalDialog">
        <div>
          <a href="#closeModal" title="Close" className="closeModal">X</a>
          <h2>Ticket Details</h2>
          <p>
            {ticketModalInfo(ticket).map(ticketInfo => (
              <span>{ticketInfo}<br /></span>
            ))}
          </p>
          <button className='btn btn-default' name='edit'>Edit Ticket</button>
          <button className='btn btn-default' name='delete'>Delete Ticket</button>
        </div>
      </div>
    </td>
);

export default TicketModal;
