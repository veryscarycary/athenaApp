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
      <div id="newTicketForm">
        Title <input type="text" placeholder="" /><br />
        Customer Id <input type="text" placeholder="" /><br />
        Product <input type="text" placeholder="" /><br />
        Related Product Versions <input type="text" placeholder="" /><br />
        Issue <input type="text" placeholder="" /><br />
        Solution <input type="text" placeholder="" /><br />
        Related Articles <input type="text" placeholder="" /><br />
        Related Products <input type="text" placeholder="" /><br />
        Created By <input type="text" placeholder="" /><br />
        Edited By <input type="text" placeholder="" /><br />
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
