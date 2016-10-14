import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';

import sessionUtils from '../../utils/sessionUtils';


class LoginContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin(e) {
    e.preventDefault();
    sessionUtils.setSession(this.state.username, this.state.password, this, this.props.getAuthLevel.bind(this), this.props.loadCurrentUser.bind(this));
  }

  render () {
    return (
      <div className='login-container'>

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
          <form action='' method='' className="loginform" onSubmit={this.handleLogin.bind(this)}>
          <h3 className="title">Log in</h3>
          {/*^onSubmit invoke fetch post to user server*/}
            <div className='form-group'>
              <label htmlFor='username' className="subtitle">Username:</label>
              <input type='text' placeholder="username" className='login-input' id='username' onChange={(e)=>this.setState({username: e.target.value})} required />
            </div>
            <div className='form-group'>
              <label className="subtitle"htmlFor='password'>Password:</label>
              <input type='password' placeholder="password" className='login-input' id='password' onChange={(e)=>this.setState({password: e.target.value})} required />
            </div>
            <Link to='/signup'>Create a new account</Link>
            <div className="button-right-float">
            <div className='form-group'>
              <input type='submit' className='login-button' id='submit' value='Login' />
            </div>
            </div>
          </form>
          {this.state.userNameDoesNotExist ? <div className="info warning">username or password is incorrect</div> : null}
          {this.state.isLoggedIn ? <div className="info success">Login Successful!</div> : null}
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actionCreators
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
