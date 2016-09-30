import React from 'react';
import { connect } from 'react-redux';

import ticketUtils from '../../utils/ticketUtils';
import * as ticketActionCreators from '../../actions/index';

const editTicket = (ticketId) => {
  alert('check for the edited ticket');
  ticketUtils.editTicket(ticketId);
};

const EditTicketForm = ({ticket}) => (
  <div className='row'>
    <div className='col-xs-12 editTicketForm'>
      <form action='#' method='' onSubmit={() => {editTicket(ticket._id)}}>
        <div className='form-group'>
          <label htmlFor='editTitle'>Title:</label>
          <input type='text' className='form-control' id='editTitle' value={ticket.title} />
        </div>
        <div className='form-group'>
        <label htmlFor='editIssue'>Issue:</label>
        <input type='text' className='form-control' id='editIssue' value={ticket.issue} />
        </div>
        <div className='form-group'>
          <label htmlFor='editProduct'>Product:</label>
          <input type='text' className='form-control' id='editProduct' value={ticket.product} />
        </div>
        <div className='form-group'>
          <label htmlFor='editCustomerId'>Customer Id:</label>
          <input type='text' className='form-control' id='editCustomerId' value={ticket.customerId}/>
        </div>
        <div className='form-group'>
          <label htmlFor='editRelatedArticles'>Related Articles:</label>
          <input type='text' className='form-control' id='editRelatedArticles' value={ticket.relatedArticles}/>
        </div>
        <div className='form-group'>
          <label htmlFor='editRelatedProducts'>Related Products:</label>
          <input type='text' className='form-control' id='editRelatedProducts' value={ticket.relatedProducts}/>
        </div>
        <div className='form-group'>
          <label htmlFor="editSolution">Solution:</label>
          <textarea className="form-control" rows="5" id="editSolution" value={ticket.solution}></textarea>
        </div>
        <div className='form-group'>
          <input type='submit' className='btn btn-default' id='editSubmit' />
        </div>
      </form>
    </div>
  </div>
);

export default EditTicketForm;
