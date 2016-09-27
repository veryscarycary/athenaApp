import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ticketUtils from '../../utils/ticketUtils';
// import store from '../../index';


import * as ticketActionCreators from '../../actions/index';
import { loadTicketState } from '../../actions/index';
import { loadFilteredTicketState } from '../../actions/index';
import Ticket from './Ticket';

class TicketDisplay extends React.Component {
  constructor (props) {
    super(props);

  };

  componentWillMount () {
    // // set tickets in state
    var context = this;
    //
    //
    //   return fetch('http://localhost:3000/api/ticket', {
    //     method: 'GET',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(function (response) {
    //     return response.json();
    //   }).then((results) => {
    //     context.props.loadTicketState(results);
    //     context.props.loadFilteredTicketState(results);
    //   })
    //   .catch(error => {
    //     console.log(error, 'There was an error getting the tickets!');
    //   });
    //--------------------
    // ticketUtils.getTickets().then((result) => {
    //   console.log(result, 'this is the result')
    //   console.log(this, 'this in the then statement');
    //   console.log(context, 'context in the then statement');
    //   this.props.loadTicketState(result);
      this.props.loadFilteredTicketState();
    // }).catch((error) => (console.error(error)));
  }

  // componentWillMount () {
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
