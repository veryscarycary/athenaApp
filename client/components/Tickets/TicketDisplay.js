import React, { Component } from 'react';
import tickets from '../../mock/ticketStubs';
import TicketList from './TicketList';
import { connect } from 'react-redux';
import { loadTicketState } from '../../actions/index.js';
import { bindActionCreators } from 'redux';

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
        <TicketList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadTicketState }, dispatch)
}

const Tickets = connect(() => ({}),
  mapDispatchToProps
)(TicketDisplay);

export default Tickets;
