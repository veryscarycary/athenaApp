import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

import { bindActionCreators } from 'redux';

import * as ticketActionCreators from '../../actions/index';

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
    };
  }

  logout() {
    // request to server to session.destroy()
    // and redirect to login
    browserHistory.push('/login');
  }

  redirectToLogin() {
    browserHistory.push('/');
  }

  handleLogin(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/api/user/${this.state.username}/${this.state.password}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      if (res.status === 200) {
        //redirect to homepage
        this.setState({isLoggedIn: true});
        this.redirectToLogin();
      } else {
        this.setState({userNameDoesNotExist: true}, () => setTimeout(() =>
        {this.setState({userNameDoesNotExist: false})}, 3000));
      }
    }).catch((err) => {
      console.log('There was an error during Login! D=', err);
    });
  }

  render () {
    return (
      <div>

        <div className='loginTop'>
          <Link className='linkMargins' to='/login'>Login</Link>
          <Link className='linkMargins' to='/signup'>Signup</Link>
          <Link className='linkMargins'>Logout</Link>
        </div>

        <div className='loginTopTrim'>
        </div>

        <div className='loginSignupContainer'>
          <form action='' method='' onSubmit={this.handleLogin.bind(this)}>
          {/*^onSubmit invoke fetch post to user server*/}
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input type='text' className='form-control' id='username' onChange={(e)=>this.setState({username: e.target.value})} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input type='password' className='form-control' id='password' onChange={(e)=>this.setState({password: e.target.value})} />
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='submit' value='Login' />
            </div>
            <Link to='/signup'>Create a new account</Link>
          </form>
          {this.state.userNameDoesNotExist ? <div>username or password is incorrect</div> : null}
          {this.state.isLoggedIn ? <div>Login Successful!</div> : null}
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
