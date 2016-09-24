import React, { Component } from 'react';
import tickets from '../../mock/ticketStubs';
import TicketListItems from './containers/TicketListItems';

class TicketDisplay extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.loadTicketState(tickets);
  }

  render() {
    return (
      <div>
        <TicketListItems />
      </div>
    )
  }
}
export default TicketDisplay;
