import React from 'react';
import { connect } from 'react-redux';

class NewTicketForm extends React.Component {
  constructor (props) {
    super(props)

  }

  // onClick, drop down a form to fill out all of the necessary info
  toggleNewTicketForm () {
    // dispatches the opposite boolean of createTicketToggle
    store.dispatch(loadCreateTicketState(!this.props.createTicketToggled))
  }

  render () {
    return (
      <div className='row col-xs-12 newTicketForm'>
        <form action='' method=''>
          <div className='form-group'>
            <label htmlFor='title'>Title:</label>
            <input type='text' className='form-control' id='title'/>
          </div>
          <div className='form-group'>
          <label htmlFor='issue'>Issue:</label>
          <input type='text' className='form-control' id='issue'/>
          </div>
          <div className='form-group'>
            <label htmlFor='product'>Title:</label>
            <input type='text' className='form-control' id='product'/>
          </div>
          <div className='form-group'>
            <label htmlFor='customerId'>Customer Id:</label>
            <input type='text' className='form-control' id='customerId'/>
          </div>
          <div className='form-group'>
            <label htmlFor='relatedArticles'>Related Articles:</label>
            <input type='text' className='form-control' id='relatedArticles'/>
          </div>
          <div className='form-group'>
            <label htmlFor='relatedProducts'>Related Products:</label>
            <input type='text' className='form-control' id='relatedProducts'/>
          </div>
          <div className='form-group'>
            <label htmlFor='relatedProducts'>Related Products:</label>
            <input type='text' className='form-control' id='relatedProducts'/>
          </div>
          <div className='form-group'>
            <label htmlFor="solution">Solution:</label>
            <textarea className="form-control" rows="5" id="solution"></textarea>
          </div>
          <div className='form-group'>
            <input type='submit' className='btn btn-default' id='submit' value='submit' />
          </div>
        </form>
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.ticketsReducer.tickets,
    createTicketToggled: store.ticketsReducer.createTicketToggled
  };
};

export default connect(mapStateToProps)(NewTicketForm);
