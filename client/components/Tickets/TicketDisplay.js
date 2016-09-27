import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as ticketActionCreators from '../../actions/index';
import Ticket from './Ticket';

class TicketDisplay extends React.Component {
  constructor (props) {
    super(props);

  };

  componentWillMount () {
    var context = this;
    // set tickets in state
    return fetch('http://localhost:3000/api/ticket', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json()
    }).then(function(result) {
      context.props.loadTicketState(result);
      context.props.loadFilteredTicketState(result);
    }).catch(function(error) {
      console.log(error, 'There was an error getting the tickets!')
    });
  }

  // componentDidMount () {
  //   // set starting value of filteredTickets to equal tickets
  //   this.props.loadFilteredTicketState(['ticket1', 'ticket2', 'ticket3']);
  // }

  render () {
    return (
      <div className='row col-xs-6'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
            <th>
              #
            </th>
            <th>
              Issue
            </th>
            <th>
              Product
            </th>
            <th>
              Customer Id
            </th>
            <th>
              Status
            </th>
            </tr>
          </thead>
          <tbody>
            {this.props.filteredTickets.map(ticket => (
              <Ticket ticket={ticket} />
            ))}
          </tbody>
        </table>
      </div>
    )
  };
}

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.ticketsReducer.tickets,
    filteredTickets: store.ticketsReducer.filteredTickets
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDisplay);
