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
    sessionUtils.setSession(this.state.username, this.state.password, this, this.props.getAuthLevel.bind(this), this.props.loadGlobalUserInfo.bind(this));
  }

  render () {
    return (
      <div>

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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actionCreators
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
