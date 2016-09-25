import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadCreateTicketState } from '../../actions/index';
import NewTicketForm from './NewTicketForm';

class CreateTicket extends React.Component {
  constructor (props) {
    super(props)

  }

  // onClick, drop down a form to fill out all of the necessary info
  toggleNewTicketForm () {
    // dispatches the opposite boolean of createTicketToggle
    console.log(this.props.createTickeToggled, 'this.props.createTickeToggled')
    this.props.loadCreateTicketState(!this.props.createTicketToggled);
  }

  render () {
    if (this.props.createTicketToggled) {
      return (
        <div className='createTicketButton'>
          <button onClick={this.toggleNewTicketForm.bind(this)}>Create Ticket</button>
          <NewTicketForm />
        </div>
      )
    } else {
      return (
        <div className='createTicketButton'>
          <button onClick={this.toggleNewTicketForm.bind(this)}>Create Ticket</button>
        </div>
      )
    }
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    createTicketToggled: store.ticketsReducer.createTicketToggled
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCreateTicketState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket);
