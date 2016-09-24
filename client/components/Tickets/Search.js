import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ticketActionCreators from '../../actions/index';
// import { loadTicketState } from '../actions/ticket-actions';
// import { loadSearchState } from '../actions/ticket-actions';
// import { loadFilteredTicketState } from '../actions/ticket-actions';

class Search extends React.Component {
  constructor (props) {
    super(props)

  }


  setSearchToState (event) {
    console.log(event, "<=event");
    console.log(event.target.value, "<=event value");
    console.log(this.props.searchText, "<=SEARCHTEXT IN PROPS");
    // set searchText in state
    var filteredTickets = this.props.tickets.filter(function(ticket) {
      console.log(ticket, 'ticket');
      console.log(event.target.value, 'textValue');
      if (ticket.includes(event.target.value)) {
        return ticket;
      }
    });
    console.log(this.props.tickets, 'tickets in props');

    console.log(filteredTickets, 'filteredTickets');
    this.props.loadSearchState(event.target.value);
    this.props.loadFilteredTicketState(filteredTickets);
  }

// onChange
  render () {
    return (
      <div>
        <input id="searchBar" onChange={this.setSearchToState.bind(this)} type="text" placeholder="Search Tickets..." />
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.ticketsReducer.tickets,
    searchText: store.ticketsReducer.searchText,
    filteredTickets: store.ticketsReducer.filteredTickets
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
