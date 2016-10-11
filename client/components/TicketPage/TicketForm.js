import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTicketField, submitTicketEdit, clearTicketArticlesSearch, getTicketForModal, submitNewTicket } from '../../actions';
import uuid from 'uuid';
import { browserHistory } from 'react-router';

class TicketFormContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.id === 'create'
      ? this.props.clearTicketArticlesSearch()
      : this.props.getTicketForModal(this.props.id);
  }

  submitForm(ticket) {
    if (this.props.id === 'create') {
      this.props.submitNewTicket(ticket)
        .then(data => browserHistory.push(`/tickets/${data.action.payload.id}`))
    } else {
      this.props.submitTicketEdit(ticket)
        .then(() => browserHistory.push('/tickets'))
    }
  }
  handleChange(e) {
    this.props.editTicketField(e.target.name, e.target.value)
  }

  render() {
    let title, issue, issuePreview, solution, customerId;
    return (
      <div className="ticket-page-form">
        <h2>{
          this.props.id === 'create' ?
            'Create ' : 'Edit '}
          your ticket</h2>
        <form action='/tickets' method='' onSubmit={(e) => {
          e.preventDefault();
          var ticket = {
            title: title.value,
            issuePreview: issuePreview.value,
            issue: issue.value,
            solution: solution.value,
            customerId: customerId.value,
            id: uuid.v4(),
          }
          if (this.props.id !== 'create') {
            ticket._id = this.props.ticket._id;
          }
          this.submitForm(ticket);
        }}>
          <label for='title'>Title</label>
          <input
            className='edit-modal-input'
            type='text'
            name='title'
            ref={node => {
              title=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.title}/>
          <label for='issuePreview'>Summary</label>
          <input
            className='edit-modal-input'
            type='text'
            name='issuePreview'
            ref={node => {
              issuePreview=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.issuePreview}/>
          <label for='issue'>Issue</label>
          <textarea
            className='edit-modal-textarea'
            type='text'
            name='issue'
            ref={node => {
              issue=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.issue}/>
          <label for='solution'>Solution</label>
          <textarea
            className='edit-modal-textarea'
            type='text'
            name='solution'
            ref={node => {
              solution=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.solution}/>
          <label for='customerId'>Customer Id</label>
          <input
            className='edit-modal-input'
            type='text'
            name='customerId'
            ref={node => {
              customerId=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.number}/>
          <button
            type='submit'>
            Submit {this.props.id === 'create' ? 'ticket' : 'edits'}
          </button>
        </form>
      </div>
    )
  }
};



const mapStateToProps = (state) => ({
  ticket: state.ticketPage.ticket
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editTicketField,
  getTicketForModal,
  submitTicketEdit,
  submitNewTicket,
  clearTicketArticlesSearch,
}, dispatch)

const TicketForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketFormContainer)

export default TicketForm;
