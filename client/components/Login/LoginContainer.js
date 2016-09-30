import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';

import * as ticketActionCreators from '../../actions/index';

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)

  }

  handleLogin() {
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then((res) => {
        if (res.status === 400) {
          this.setState({userNameDoesNotExist: true});
        } else {
        //redirect to events page
          this.setState({isLoggedin: true});
        }
      }).catch((err) => {
        console.log('There is an error. It\'s a sad day D=', err);
      });
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
              <input type='submit' className='btn btn-default' id='submit' value='Login' />
            </div>
            <Link to='/signup'>Create a new account</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
