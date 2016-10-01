import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

import { bindActionCreators } from 'redux';

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
      this.setState({pwMismatch: true}, setTimeout(() =>
        {this.setState({pwMismatch: false})}, 4000));
    }
  }

  postNewUser() {
    //make a post request to server
    alert(JSON.stringify(this.state.username, this.state.password, 'signup info'));
    fetch(`http://localhost:3000/api/user/${this.state.username}/${this.state.password}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:this.state.username,
        password:this.state.password
      })
    }).then((res) => {
      console.log(res);
      if (res.status === 201) {
        this.setState({
          signupSuccessful: true
        }, setTimeout(this.redirectToLogin, 1000));
        this.redirectToLogin();
      } else {
        this.setState({usernameIsUsed: true});
      }
    }).catch((err) => {
      //if name exist
      console.log('There is an error. It\'s sad day D=', err);
    });
  }


  redirectToLogin() {
    browserHistory.push('/login');
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
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='submit' value='Signup' />
            </div>
          </form>
          {this.state.userNameDoesNotExist ? <div>username or password is incorrect</div> : <div></div>}
          {this.state.pwMismatch ? <div>Password does not match. Try again.</div> : <div></div>}
          {this.state.signupSuccessful ? <div>Account creation successful!</div> : <div></div>}
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
