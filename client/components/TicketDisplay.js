import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { loadTicketState } from '../actions/ticket-actions';

class TicketDisplay extends React.Component {
  constructor (props) {
    super(props);

  };

  componentDidMount() {
    console.log(loadTicketState);
    //returns an action to the store
    store.dispatch(loadTicketState(['ticket1', 'ticket2', 'ticket3']));
  }

  render () {
    return (
      <div>{JSON.stringify(this.props.tickets)}</div>
    )
  };
}

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.reducer1.tickets
  };
};

export default connect(mapStateToProps)(TicketDisplay);