import React from 'react';
import { connect } from 'react-redux';

import ticketUtils from '../../utils/ticketUtils';
import * as ticketActionCreators from '../../actions/index';

const editTicket = (ticketId) => {
  ticketUtils.editTicket(ticketId);
};

class EditTicketForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editTitle: this.props.ticket.title,
      editIssue: this.props.ticket.issue,
      editProduct: this.props.ticket.product,
      editCustomerId: this.props.ticket.customerId,
      editRelatedArticles: this.props.ticket.relatedArticles,
      editRelatedProducts: this.props.ticket.relatedProducts,
      editSolution: this.props.ticket.solution
    }
  }

  setTitle (event) {
    this.setState({
      editTitle: event.target.value,
    });
  }
  setIssue (event) {
    this.setState({
      editIssue: event.target.value,
    });
  }

  setProduct (event) {
    this.setState({
      editProduct: event.target.value,
    });
  }

  setCustomerId (event) {
    this.setState({
      editCustomerId: event.target.value,
    });
  }

  setRelatedArticles (event) {
    this.setState({
      editRelatedArticles: event.target.value,
    });
  }

  setRelatedProducts (event) {
    this.setState({
      editRelatedProducts: event.target.value,
    });
  }

  setSolution (event) {
    this.setState({
      editSolution: event.target.value,
    });
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 editTicketForm'>
          <form action='/tickets' method='' onSubmit={() => {editTicket(this.props.ticket._id)}}>
            <div className='form-group'>
              <label htmlFor='editTitle'>Title:</label>
              <input type='text' className='form-control' id='editTitle' onChange={this.setTitle.bind(this)} value={this.state.editTitle} />
            </div>
            <div className='form-group'>
            <label htmlFor='editIssue'>Issue:</label>
            <input type='text' className='form-control' id='editIssue' onChange={this.setIssue.bind(this)} value={this.state.editIssue} />
            </div>
            <div className='form-group'>
              <label htmlFor='editProduct'>Product:</label>
              <input type='text' className='form-control' id='editProduct' onChange={this.setProduct.bind(this)} value={this.state.editProduct} />
            </div>
            <div className='form-group'>
              <label htmlFor='editCustomerId'>Customer Id:</label>
              <input type='text' className='form-control' id='editCustomerId' onChange={this.setCustomerId.bind(this)} value={this.state.editCustomerId}/>
            </div>
            <div className='form-group'>
              <label htmlFor='editRelatedArticles'>Related Articles:</label>
              <input type='text' className='form-control' id='editRelatedArticles' onChange={this.setRelatedArticles.bind(this)} value={this.state.editRelatedArticles}/>
            </div>
            <div className='form-group'>
              <label htmlFor='editRelatedProducts'>Related Products:</label>
              <input type='text' className='form-control' id='editRelatedProducts' onChange={this.setRelatedProducts.bind(this)} value={this.state.editRelatedProducts}/>
            </div>
            <div className='form-group'>
              <label htmlFor="editSolution">Solution:</label>
              <textarea className="form-control" rows="5" id="editSolution" onChange={this.setSolution.bind(this)} value={this.state.editSolution}></textarea>
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='editSubmit' />
            </div>
          </form>
        </div>
      </div>
    )
  };
};

export default EditTicketForm;
