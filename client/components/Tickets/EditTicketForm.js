import React from 'react';
import { connect } from 'react-redux';

import ticketUtils from '../../utils/ticketUtils';
import * as ticketActionCreators from '../../actions/index';

class EditTicketForm extends React.Component {
  constructor (props) {
    super(props)

  }

  submitForm() {// change to Edit Ticket
    ticketUtils.submitNewTicket();
  }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-12 editTicketForm'>
          <form action='#' method='' onSubmit={this.submitForm}>
            <div className='form-group'>
              <label htmlFor='editTitle'>Title:</label>
              <input type='text' className='form-control' id='editTitle' />
            </div>
            <div className='form-group'>
            <label htmlFor='editIssue'>Issue:</label>
            <input type='text' className='form-control' id='editIssue' value={document.getElementById('previewissue')} />
            </div>
            <div className='form-group'>
              <label htmlFor='editProduct'>Product:</label>
              <input type='text' className='form-control' id='editProduct' />
            </div>
            <div className='form-group'>
              <label htmlFor='editCustomerId'>Customer Id:</label>
              <input type='text' className='form-control' id='editCustomerId' />
            </div>
            <div className='form-group'>
              <label htmlFor='editRelatedArticles'>Related Articles:</label>
              <input type='text' className='form-control' id='editRelatedArticles' />
            </div>
            <div className='form-group'>
              <label htmlFor='editRelatedProducts'>Related Products:</label>
              <input type='text' className='form-control' id='editRelatedProducts' />
            </div>
            <div className='form-group'>
              <label htmlFor="editSolution">Solution:</label>
              <textarea className="form-control" rows="5" id="editSolution"></textarea>
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='editSubmit' />
            </div>
          </form>
        </div>
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.ticketsReducer.tickets
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps)(EditTicketForm);
