import React from 'react';

const TicketList = ({ tickets }) => {
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

export default TicketList;
