import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

import { bindActionCreators } from 'redux';

import Cookies from 'js-cookie';
import userUtils from '../../utils/userUtils';
import sessionUtils from '../../utils/sessionUtils';
import * as actionCreators from '../../actions/index';

class SignupContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
      fullName: '',
      email: '',
      phoneNumber: '',
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

  notFullName () {
    let name = document.getElementById('fullName').value.split(' ');
    if (name.length > 2) {
      alert('Please enter only your first name and last name.');
      return true;
    } else if (name.length < 2) {
      alert('Please enter a first name AND last name.');
      return true;
    }
    return false;
  }

  postNewUser() {
    var roles = [];
    if (this.notFullName()) {return;}

    // check to see if they are the first user on the service
    userUtils.getUser().then((users) => {
      if (users.length === 0) {
        roles = ['admin'];
      } else {
        roles = ['user'];
      }
    }).then(() => {
      //make a post request to server
      fetch(`/api/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username:this.state.username,
          password:this.state.password,
          firstName: document.getElementById('fullName').value.split(' ')[0].trim(),
          lastName: document.getElementById('fullName').value.split(' ')[1].trim(),
          phoneNumber: document.getElementById('phoneNumber').value.trim(),
          email: document.getElementById('email').value.trim(),
          roles:roles
        })
      }).then((res) => {
        if (res.status === 201) {
          sessionUtils.setSession(this.state.username, this.state.password, this, this.props.getAuthLevel.bind(this), this.props.loadCurrentUser.bind(this))
            .then(() => {
              this.setState({
                signupSuccessful: true
              }, () => setTimeout(this.redirectToHome, 1000));
            })
        } else {
          //if name exist
          this.setState({usernameIsUsed: true}, () => setTimeout(() =>
            {this.setState({usernameIsUsed: false})}, 3000));
        }
      }).catch((err) => {
        console.log('There was an error during signup! =(', err);
      });
    });
  }

  redirectToHome() {
    browserHistory.push('/');
  }

  render () {
    return (
      <div className="login-container">
        <div className='loginTop'>
          <div>
            <Link className='browseArticles' to='/articles'>Browse Articles</Link>
          </div>
          <div>
            <Link className='linkMargins' to='/login'>Login</Link>
            <Link className='linkMargins' to='/signup'>Signup</Link>
          </div>
        </div>

        <div className='loginTopTrim'>
        </div>
        <div className="login">
        <div className='loginSignupContainer'>
          <div className='col-xs-12 col-xs-push-4'>
            <form action='' method='' className="loginform"onSubmit={this.handleSignup.bind(this)}>
            {/*^onSubmit invoke fetch post to user server*/}
            <h3 className="title">Sign up</h3>
            <div className='form-group signupLineHeight'>
                <label className="subtitle" htmlFor='username'>Username:</label>
                <input type='text' className='login-input' id='username' onChange={(e)=>this.setState({username: e.target.value})} required />
              </div>
              <div className='form-group signupLineHeight'>
              <label className="subtitle" htmlFor='password'>Password:</label>
              <input type='password' className='login-input' id='password' onChange={(e)=>this.setState({password: e.target.value})} required />
              </div>
              <div className='form-group signupLineHeight'>
              <label className="subtitle" htmlFor='repeatPassword'>Repeat Password:</label>
              <input type='password' className='login-input' id='repeatPassword' onChange={(e)=>this.setState({repeatPassword: e.target.value})} required />
              </div>
              <br required />


              <div className='form-group signupLineHeight'>
                <label htmlFor='fullName' className="subtitle">Full Name:</label>
                <input type='text' className='login-input' id='fullName' onChange={(e)=>this.setState({fullName: e.target.value})} required />
              </div>
              <div className='form-group signupLineHeight'>
                <label htmlFor='email' className="subtitle">Email:</label>
                <input type='text' className='login-input' id='email' onChange={(e)=>this.setState({email: e.target.value})} required />
              </div>
              <div className='form-group signupLineHeight'>
                <label htmlFor='phoneNumber' className="subtitle">Phone Number:</label>
                <input type='text' className='login-input' id='phoneNumber' onChange={(e)=>this.setState({phoneNumber: e.target.value})} required />
              </div>
              <div className='button-right-float'>
                <input type='submit' className='login-button' id='submit' value='Signup' />
              </div>
            </form>
            <div>
              {this.state.usernameIsUsed ? <div>That username has already been taken. Try again.</div> : null}
              {this.state.pwMismatch ? <div>Password does not match. Try again.</div> : null}
              {this.state.signupSuccessful ? <div>Account creation successful!</div> : null}
            </div>
          </div>
        </div>
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
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
