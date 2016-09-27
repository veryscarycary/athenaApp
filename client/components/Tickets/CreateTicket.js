import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadCreateTicketState } from '../../actions/index';
import NewTicketForm from './NewTicketForm';

class CreateTicket extends React.Component {
  constructor (props) {
    super(props)

  }


  render () {
      return (
        <div>
          <div className='row col-md-10 col-md-push-1'>
            <button className='btn btn-default' data-toggle='collapse' data-target='#content'>Create Ticket</button>
            <div className='collapse' id='content'>
              <NewTicketForm className='collapse' id='content' />
            </div>
          </div>
        </div>
      )
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
