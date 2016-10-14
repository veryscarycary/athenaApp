import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ticketSearch, clearTicketSearch } from '../../actions';
import * as ticketActionCreators from '../../actions/index';

class Search extends React.Component {
  constructor (props) {
    super(props)

  }
  handleSearch(term) {
    var options = {
      term:term,
      type:'ticket',
    }
    this.props.ticketSearch(options)
  }
  clearSearch() {
    this.props.clearTicketSearch();
  }

  render () {
    let term;
    return (
      <div
        tabIndex="0"
        className="search-tickets"
        onBlur={e => {
          term.value='';
          this.clearSearch(e);
        }} >
        <input id="searchBar"
          ref={node => {
            term=node
          }}
          onChange={() => {
            if (!term.value.trim()) {
              this.clearSearch();
            } else {
              this.handleSearch(term.value)
            }
          }}
          type="text"
          placeholder="Search Tickets..." />
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ticketSearch,
  clearTicketSearch,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);
