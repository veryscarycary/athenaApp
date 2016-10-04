import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actions/index';

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    };
  }

  redirectToLanding() {
    browserHistory.push('/');
  }

  handleLogin(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/api/signin/${this.state.username}/${this.state.password}`, {
      method: 'GET',
      credentials: 'same-origin'
    }).then((res) => {
      if (res.status === 200) {
        //redirect to homepage
        return res.text().then(text => {
          // this.props.loadSessionId(text);  no longer need, keeping just in case
          sessionStorage.setItem('sessionId', text);
          this.redirectToLanding();
        });
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
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
