import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

import { bindActionCreators } from 'redux';

import sessionUtils from '../../utils/sessionUtils';
import * as ticketActionCreators from '../../actions/index';

class SignupContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
      pwMismatch: false,
      usernameIsUsed: false,
      signupSuccessful: false
    };
  }

  handleSignup(e) {
    e.preventDefault();
    //check if repeat password matches password
    if (this.state.password === this.state.repeatPassword) {
      this.setState({pwMismatch: false});
      this.postNewUser();
    } else {
      this.setState({pwMismatch: true}, () => setTimeout(() =>
        {this.setState({pwMismatch: false})}, 3000));
    }
  }

  postNewUser() {
    var roles = [];
    if (document.getElementById('userBox').checked) {roles.push('user');}
    if (document.getElementById('adminBox').checked) {roles.push('admin');}
    //make a post request to server
    fetch(`http://localhost:3000/api/signin/${this.state.username}/${this.state.password}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:this.state.username,
        password:this.state.password,
        roles:roles
      })
    }).then((res) => {
      if (res.status === 201) {
        sessionUtils.setSession(this.state.username, this.state.password, this)
          .then(() => {
            this.setState({
              signupSuccessful: true
            }, () => setTimeout(this.redirectToHome, 1000));
          });
      } else {
        //if name exist
        this.setState({usernameIsUsed: true}, () => setTimeout(() =>
          {this.setState({usernameIsUsed: false})}, 3000));
      }
    }).catch((err) => {
      console.log('There was an error during signup! =(', err);
    });
  }

  redirectToHome() {
    browserHistory.push('/');
  }

  render () {
    return (
      <div>
        <div className='signupTop'>
          <Link className='linkMargins' to='/login'>Login</Link>
          <Link className='linkMargins' to='/signup'>Signup</Link>
        </div>

        <div className='loginTopTrim'>
        </div>

        <div className='loginSignupContainer'>
          <form action='' method='' onSubmit={this.handleSignup.bind(this)}>
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
              <label htmlFor='repeatPassword'>Repeat Password:</label>
              <input type='password' className='form-control' id='repeatPassword' onChange={(e)=>this.setState({repeatPassword: e.target.value})} />
            </div>
            <div className='rowFlex'>
              <div className='form-group'>
                <label htmlFor='userBox'>User</label>
                <input type='checkbox' className='form-control' id='userBox' value='user' onChange={(e)=>this.setState({userRole: e.target.value})} />
              </div>
              <div className='form-group'>
                <label htmlFor='adminBox'>Admin</label>
                <input type='checkbox' className='form-control' id='adminBox' value='admin' onChange={(e)=>this.setState({adminRole: e.target.value})} />
              </div>
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='submit' value='Signup' />
            </div>
          </form>
          {this.state.usernameIsUsed ? <div>That username has already been taken. Try again.</div> : null}
          {this.state.pwMismatch ? <div>Password does not match. Try again.</div> : null}
          {this.state.signupSuccessful ? <div>Account creation successful!</div> : null}
        </div>
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
