import React from 'react';
import { connect } from 'react-redux';

import ticketActionCreators from '../../actions/index';
import EditTicketForm from './EditTicketForm';


class TicketModal extends React.Component {
  constructor (props) {
    super(props)

  }

  ticketModalInfo (ticket) {
    var ticketInfo = [];

    for (var key in ticket) {
      ticketInfo.push([key, ticket[key]]);
    }

    return ticketInfo;
  };

  // componentDidMount () {
  //   this.props.loadTicketInfoToState(this.props.ticket);
  // }

  editTicket () {

  };

  deleteTicket () {

  };

  render () {
    return (
      <td>
        <a href={`#openModal${this.props.ticket._id}`}>More Info</a>

        <div id={`openModal${this.props.ticket._id}`} className="modalDialog">
          <div>
            <a href="#closeModal" title="Close" className="closeModal">X</a>
            <h2>Ticket Details</h2>
            <p>
            {this.ticketModalInfo(this.props.ticket).map(ticketInfo => (
              <span id={`preview${ticketInfo[0]}`}>{ticketInfo.join(': ')}<br /></span>
            ))
            }
            </p>
            <button className='btn btn-default' onClick={() => (alert(JSON.stringify(this.props.ticket)))} data-toggle='collapse' data-target={`#editTicket${this.props.ticket._id}`}>Edit Ticket</button>
            <button className='btn btn-default' name='delete'>Delete Ticket</button>

            <div className='collapse' id={`editTicket${this.props.ticket._id}`}>
              <EditTicketForm ticket={this.props.ticket} className='collapse' />
            </div>
          </div>
        </div>
      </td>
    );
  }

}

export default TicketModal;
