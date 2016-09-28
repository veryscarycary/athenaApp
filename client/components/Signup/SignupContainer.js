import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';

import * as ticketActionCreators from '../../actions/index';

class SignupContainer extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>

        <div className='loginTop'>
          <Link className='linkMargins' to='/login'>Login</Link>
          <Link className='linkMargins' to='/signup'>Signup</Link>
        </div>

        <div className='loginTopTrim'>
        </div>

        <div className='loginSignupContainer'>
          <form action='' method=''>
          {/*^onSubmit invoke fetch post to user server*/}
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input type='text' className='form-control' id='username'/>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input type='text' className='form-control' id='password'/>
            </div>
            <div className='form-group'>
              <label htmlFor='repeatPassword'>Repeat Password:</label>
              <input type='text' className='form-control' id='repeatPassword'/>
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='submit' value='Signup' />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
