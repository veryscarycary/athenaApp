import React from 'react';
import { connect } from 'react-redux';

import ticketUtils from '../../utils/ticketUtils';
import * as ticketActionCreators from '../../actions/index';

class NewTicketForm extends React.Component {
  constructor (props) {
    super(props)

  }

  submitForm() {
    ticketUtils.submitNewTicket();
  }

  render () {
    return (
      <div className='row col-xs-12 newTicketForm'>
        <form action='#' method='' onSubmit={this.submitForm}>
          <div className='form-group'>
            <label htmlFor='title'>Title:</label>
            <input type='text' className='form-control' id='title' />
          </div>
          <div className='form-group'>
          <label htmlFor='issue'>Issue:</label>
          <input type='text' className='form-control' id='issue' />
          </div>
          <div className='form-group'>
            <label htmlFor='product'>Product:</label>
            <input type='text' className='form-control' id='product' />
          </div>
          <div className='form-group'>
            <label htmlFor='customerId'>Customer Id:</label>
            <input type='text' className='form-control' id='customerId' />
          </div>
          <div className='form-group'>
            <label htmlFor='relatedArticles'>Related Articles:</label>
            <input type='text' className='form-control' id='relatedArticles' />
          </div>
          <div className='form-group'>
            <label htmlFor='relatedProducts'>Related Products:</label>
            <input type='text' className='form-control' id='relatedProducts' />
          </div>
          <div className='form-group'>
            <label htmlFor="solution">Solution:</label>
            <textarea className="form-control" rows="5" id="solution"></textarea>
          </div>
          <div className='form-group'>
            <input type='submit' className='btn btn-default' id='submit' />
          </div>
        </form>
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

export default connect(mapStateToProps)(NewTicketForm);
