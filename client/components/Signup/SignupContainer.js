import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as ticketActionCreators from '../../actions/index';

class SignupContainer extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div className='loginSignupContainer'>
        Username: <br />
        <input id="searchBar" type="text" placeholder="username" />
        Password: <br />
        <input id="searchBar" type="text" placeholder="********" />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
