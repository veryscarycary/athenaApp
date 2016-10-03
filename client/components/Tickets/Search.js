import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ticketActionCreators from '../../actions/index';

class Search extends React.Component {
  constructor (props) {
    super(props)

  }


  setSearchToState (event) {
    // set searchText in state
    var filteredTickets = this.props.tickets.filter(function(ticket) {
      if (ticket.issue.includes(event.target.value) || ticket.customerId.includes(event.target.value)) {
        return ticket;
      }
    });
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
