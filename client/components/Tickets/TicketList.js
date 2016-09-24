import React from 'react';
import { connect } from 'react-redux';

const TicketListItems = ({ tickets }) => {
  return (
    <div className="ticket-list">
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.ticketsList
  }
}

const TicketList = connect(
  mapStateToProps
)(TicketListItems);

export default TicketList;
